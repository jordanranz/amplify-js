import { I18n } from '@aws-amplify/core';
import { Component, Prop, State, h } from '@stencil/core';
import { FormFieldTypes } from '../amplify-auth-fields/amplify-auth-fields-interface';
import {
  AuthState,
  ChallengeName,
  CognitoUserInterface,
  AuthFormField,
  AuthStateHandler,
} from '../../common/types/auth-types';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { Translations } from '../../common/Translations';

import { Auth } from '@aws-amplify/auth';
import { ConsoleLogger as Logger } from '@aws-amplify/core';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, requiredAttributesMap } from '../../common/helpers';
import { checkContact } from '../../common/auth-helpers';

const logger = new Logger('amplify-require-new-password');

@Component({
  tag: 'amplify-require-new-password',
  shadow: true,
})
export class AmplifyRequireNewPassword {
  /** The header text of the forgot password section */
  @Prop() headerText: string = Translations.CHANGE_PASSWORD;
  /** The text displayed inside of the submit button for the form */
  @Prop() submitButtonText: string = Translations.CHANGE_PASSWORD_ACTION;
  /** The function called when submitting a new password */
  @Prop() handleSubmit: (event: Event) => void = event => this.completeNewPassword(event);
  /** Auth state change handler for this component */
  @Prop() handleAuthStateChange: AuthStateHandler = dispatchAuthStateChangeEvent;
  /** Used for the username to be passed to resend code */
  @Prop() user: CognitoUserInterface;
  /** The form fields displayed inside of the forgot password form */
  @Prop() formFields: FormFieldTypes = [
    {
      type: AuthFormField.Password,
      required: true,
      handleInputChange: event => this.handlePasswordChange(event),
      label: I18n.get(Translations.NEW_PASSWORD_LABEL),
      placeholder: I18n.get(Translations.NEW_PASSWORD_PLACEHOLDER),
      inputProps: {
        'data-test': 'require-new-password-password-input',
      },
    },
  ];

  @State() currentUser: CognitoUserInterface = this.user;
  @State() password: string;
  @State() loading: boolean = false;
  private requiredAttributes: object = {};

  private newFormFields: FormFieldTypes = this.formFields;

  private handleRequiredAttributeInputChange(attribute, event) {
    this.requiredAttributes[attribute] = event.target.value;
  }

  async componentWillLoad() {
    if (!this.user) {
      // Check for authenticated user
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) this.currentUser = user;
      } catch (error) {
        dispatchToastHubEvent(error);
      }
    }
    if (this.currentUser && this.currentUser.challengeParam.requiredAttributes) {
      const userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;

      userRequiredAttributes.forEach(attribute => {
        const formField = {
          type: attribute,
          required: true,
          label: requiredAttributesMap[attribute].label,
          placeholder: requiredAttributesMap[attribute].placeholder,
          handleInputChange: event => this.handleRequiredAttributeInputChange(attribute, event),
          inputProps: {
            'data-test': `require-new-password-${attribute}-input`,
          },
        };
        this.newFormFields.push(formField);
      });
    }
  }

  private handlePasswordChange(event) {
    this.password = event.target.value;
  }

  private async completeNewPassword(event: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!Auth || typeof Auth.completeNewPassword !== 'function') {
      throw new Error(NO_AUTH_MODULE_FOUND);
    }

    this.loading = true;
    try {
      const user = await Auth.completeNewPassword(this.currentUser, this.password, this.requiredAttributes);

      logger.debug('complete new password', user);
      switch (user.challengeName) {
        case ChallengeName.SMSMFA:
          this.handleAuthStateChange(AuthState.ConfirmSignIn, user);
          break;
        case ChallengeName.MFASetup:
          logger.debug('TOTP setup', user.challengeParam);
          this.handleAuthStateChange(AuthState.TOTPSetup, user);
          break;
        default:
          checkContact(user, this.handleAuthStateChange);
      }
    } catch (error) {
      dispatchToastHubEvent(error);
    } finally {
      this.loading = false;
    }
  }

  render() {
    return (
      <amplify-form-section
        headerText={I18n.get(this.headerText)}
        handleSubmit={this.handleSubmit}
        loading={this.loading}
        secondaryFooterContent={
          <amplify-button variant="anchor" onClick={() => this.handleAuthStateChange(AuthState.SignIn)}>
            {I18n.get(Translations.BACK_TO_SIGN_IN)}
          </amplify-button>
        }
      >
        <amplify-auth-fields formFields={this.newFormFields} />
      </amplify-form-section>
    );
  }
}
