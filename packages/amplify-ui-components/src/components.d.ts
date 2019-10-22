/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  FormFieldTypes,
} from './components/amplify-auth-fields/amplify-auth-fields-interface';
import {
  AuthState,
} from './common/types/auth-types';
import {
  ButtonTypes,
  TextFieldTypes,
} from './common/types/ui-types';
import {
  CountryCodeDialOptions,
} from './components/amplify-country-dial-code/amplify-country-dial-code-interface';
import {
  FunctionalComponent,
} from '@stencil/core';
import {
  IconNameType,
} from './components/amplify-icon/icons';
import {
  AmplifySceneError,
} from './components/amplify-scene/amplify-scene-interface';
import {
  SelectOptionsNumber,
  SelectOptionsString,
} from './components/amplify-select/amplify-select-interface';

export namespace Components {
  interface AmplifyAuthFields {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields': FormFieldTypes | string[];
  }
  interface AmplifyAuthenticator {
    /**
    * Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp
    */
    'initialAuthState': AuthState;
  }
  interface AmplifyButton {
    /**
    * (Optional) Callback called when a user clicks on the button
    */
    'handleButtonClick': (evt: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
    /**
    * Type of the button: 'button', 'submit' or 'reset'
    */
    'type': ButtonTypes;
  }
  interface AmplifyCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled': boolean;
    /**
    * Field ID used for the 'htmlFor' in the label
    */
    'fieldId': string;
    /**
    * Label for the checkbox
    */
    'label': string;
    /**
    * Name of the checkbox
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
    /**
    * Value of the checkbox
    */
    'value'?: string;
  }
  interface AmplifyCodeField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the code label
    */
    'label': string;
    /**
    * Used for the placeholder label
    */
    'placeholder': string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required': boolean;
    'value': string;
  }
  interface AmplifyCountryDialCode {
    /**
    * The options of the country dial code select input.
    */
    'options': CountryCodeDialOptions;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
  }
  interface AmplifyEmailField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the EMAIL label
    */
    'label': string;
    /**
    * Used for the placeholder label
    */
    'placeholder': string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required': boolean;
  }
  interface AmplifyExamples {}
  interface AmplifyForgotPassword {
    'formFields': FormFieldTypes;
    'handleAuthStateChange': (nextAuthState: AuthState, data?: object) => void;
    'handleSend': (event: Event) => void;
    'handleSubmit': (event: Event) => void;
    'headerText': string;
    'overrideStyle': boolean;
    'submitButtonText': string;
  }
  interface AmplifyFormField {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint': string | FunctionalComponent | null;
    /**
    * The text of the label.  Goes above the input. Ex: 'First name'
    */
    'label': string | null;
    /**
    * (Optional) String value for the name of the input.
    */
    'name'?: string;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required': boolean;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
    'value': string;
  }
  interface AmplifyFormSection {
    /**
    * (Required) Function called upon submission of form
    */
    'handleSubmit': (inputEvent: Event) => void;
    /**
    * Used for form section header
    */
    'headerText': string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    'primaryFooterContent': string | FunctionalComponent;
    'secondaryFooterContent': string | FunctionalComponent | null;
    /**
    * (Optional) Used as a the default value within the default footer slot
    */
    'submitButtonText'?: string;
  }
  interface AmplifyHint {
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
  }
  interface AmplifyIcon {
    /**
    * (Required) Name of icon used to determine the icon rendered
    */
    'name': IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
  }
  interface AmplifyIconButton {
    'autoShowTooltip': boolean;
    'name': IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
    'tooltip': string | null;
  }
  interface AmplifyInput {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description': string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) String value for the name of the input.
    */
    'name'?: string;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
    'value': string;
  }
  interface AmplifyLabel {
    'htmlFor': string;
    'overrideStyle': boolean;
  }
  interface AmplifyLink {
    'overrideStyle': boolean;
    'role': string;
  }
  interface AmplifyPasswordField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used as the hint in case you forgot your password, etc.
    */
    'hint': string | FunctionalComponent | null;
    /**
    * Used for the password label
    */
    'label': string;
    /**
    * Used for the placeholder label
    */
    'placeholder': string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required': boolean;
    'value'?: string;
  }
  interface AmplifyRadioButton {
    /**
    * If `true`, the radio button is selected.
    */
    'checked': boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled': boolean;
    /**
    * Field ID used for the 'for' in the label
    */
    'fieldId': string;
    /**
    * Label for the radio button
    */
    'label': string;
    /**
    * (Optional) Name of radio button
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
    /**
    * (Optional) Value of radio button
    */
    'value'?: string;
  }
  interface AmplifyScene {
    'sceneName': string;
  }
  interface AmplifySceneLoading {
    'loadPercentage': number;
    'sceneError': AmplifySceneError | null;
    'sceneName': string;
  }
  interface AmplifySection {
    'overrideStyle'?: boolean;
    'role': string;
  }
  interface AmplifySelect {
    /**
    * Used for id field
    */
    'fieldId': string;
    /**
    * The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number}
    */
    'options': SelectOptionsString | SelectOptionsNumber;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
  }
  interface AmplifySignIn {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields': FormFieldTypes | string[];
    'handleAuthStateChange': (nextAuthState: AuthState, data?: object) => void;
    /**
    * Fires when sign in form is submitted
    */
    'handleSubmit': (Event) => void;
    /**
    * Used for header text in sign in component
    */
    'headerText': string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
    /**
    * Used for the submit button text in sign in component
    */
    'submitButtonText': string;
    /**
    * Engages when invalid actions occur, such as missing field, etc.
    */
    'validationErrors': string;
  }
  interface AmplifySignUp {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields': FormFieldTypes | string[];
    /**
    * Passed from the Authenticatior component in order to change Authentication states e.g. SignIn -> 'Create Account' link -> SignUp
    */
    'handleAuthStateChange': (nextAuthState: AuthState, data?: object) => void;
    /**
    * Fires when sign up form is submitted
    */
    'handleSubmit': (submitEvent: Event) => void;
    /**
    * Used for the submit button text in sign up component
    */
    'haveAccountText': string;
    /**
    * Used for header text in sign up component
    */
    'headerText': string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle': boolean;
    /**
    * Used for the submit button text in sign up component
    */
    'signInText': string;
    /**
    * Used for the submit button text in sign up component
    */
    'submitButtonText': string;
    /**
    * Engages when invalid actions occur, such as missing field, etc.
    */
    'validationErrors': string;
  }
  interface AmplifyTooltip {
    /**
    * (Optional) Override default styling
    */
    'overrideStyle': boolean;
    /**
    * (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered
    */
    'shouldAutoShow': boolean;
    /**
    * (Required) The text in the tooltip
    */
    'text': string;
  }
  interface AmplifyUsernameField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId': string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the username label
    */
    'label': string;
    /**
    * Used for the placeholder label
    */
    'placeholder': string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required': boolean;
    'value'?: string;
  }
  interface RockPaperScissor {
    'icon': Function;
  }
}

declare global {


  interface HTMLAmplifyAuthFieldsElement extends Components.AmplifyAuthFields, HTMLStencilElement {}
  const HTMLAmplifyAuthFieldsElement: {
    prototype: HTMLAmplifyAuthFieldsElement;
    new (): HTMLAmplifyAuthFieldsElement;
  };

  interface HTMLAmplifyAuthenticatorElement extends Components.AmplifyAuthenticator, HTMLStencilElement {}
  const HTMLAmplifyAuthenticatorElement: {
    prototype: HTMLAmplifyAuthenticatorElement;
    new (): HTMLAmplifyAuthenticatorElement;
  };

  interface HTMLAmplifyButtonElement extends Components.AmplifyButton, HTMLStencilElement {}
  const HTMLAmplifyButtonElement: {
    prototype: HTMLAmplifyButtonElement;
    new (): HTMLAmplifyButtonElement;
  };

  interface HTMLAmplifyCheckboxElement extends Components.AmplifyCheckbox, HTMLStencilElement {}
  const HTMLAmplifyCheckboxElement: {
    prototype: HTMLAmplifyCheckboxElement;
    new (): HTMLAmplifyCheckboxElement;
  };

  interface HTMLAmplifyCodeFieldElement extends Components.AmplifyCodeField, HTMLStencilElement {}
  const HTMLAmplifyCodeFieldElement: {
    prototype: HTMLAmplifyCodeFieldElement;
    new (): HTMLAmplifyCodeFieldElement;
  };

  interface HTMLAmplifyCountryDialCodeElement extends Components.AmplifyCountryDialCode, HTMLStencilElement {}
  const HTMLAmplifyCountryDialCodeElement: {
    prototype: HTMLAmplifyCountryDialCodeElement;
    new (): HTMLAmplifyCountryDialCodeElement;
  };

  interface HTMLAmplifyEmailFieldElement extends Components.AmplifyEmailField, HTMLStencilElement {}
  const HTMLAmplifyEmailFieldElement: {
    prototype: HTMLAmplifyEmailFieldElement;
    new (): HTMLAmplifyEmailFieldElement;
  };

  interface HTMLAmplifyExamplesElement extends Components.AmplifyExamples, HTMLStencilElement {}
  const HTMLAmplifyExamplesElement: {
    prototype: HTMLAmplifyExamplesElement;
    new (): HTMLAmplifyExamplesElement;
  };

  interface HTMLAmplifyForgotPasswordElement extends Components.AmplifyForgotPassword, HTMLStencilElement {}
  const HTMLAmplifyForgotPasswordElement: {
    prototype: HTMLAmplifyForgotPasswordElement;
    new (): HTMLAmplifyForgotPasswordElement;
  };

  interface HTMLAmplifyFormFieldElement extends Components.AmplifyFormField, HTMLStencilElement {}
  const HTMLAmplifyFormFieldElement: {
    prototype: HTMLAmplifyFormFieldElement;
    new (): HTMLAmplifyFormFieldElement;
  };

  interface HTMLAmplifyFormSectionElement extends Components.AmplifyFormSection, HTMLStencilElement {}
  const HTMLAmplifyFormSectionElement: {
    prototype: HTMLAmplifyFormSectionElement;
    new (): HTMLAmplifyFormSectionElement;
  };

  interface HTMLAmplifyHintElement extends Components.AmplifyHint, HTMLStencilElement {}
  const HTMLAmplifyHintElement: {
    prototype: HTMLAmplifyHintElement;
    new (): HTMLAmplifyHintElement;
  };

  interface HTMLAmplifyIconElement extends Components.AmplifyIcon, HTMLStencilElement {}
  const HTMLAmplifyIconElement: {
    prototype: HTMLAmplifyIconElement;
    new (): HTMLAmplifyIconElement;
  };

  interface HTMLAmplifyIconButtonElement extends Components.AmplifyIconButton, HTMLStencilElement {}
  const HTMLAmplifyIconButtonElement: {
    prototype: HTMLAmplifyIconButtonElement;
    new (): HTMLAmplifyIconButtonElement;
  };

  interface HTMLAmplifyInputElement extends Components.AmplifyInput, HTMLStencilElement {}
  const HTMLAmplifyInputElement: {
    prototype: HTMLAmplifyInputElement;
    new (): HTMLAmplifyInputElement;
  };

  interface HTMLAmplifyLabelElement extends Components.AmplifyLabel, HTMLStencilElement {}
  const HTMLAmplifyLabelElement: {
    prototype: HTMLAmplifyLabelElement;
    new (): HTMLAmplifyLabelElement;
  };

  interface HTMLAmplifyLinkElement extends Components.AmplifyLink, HTMLStencilElement {}
  const HTMLAmplifyLinkElement: {
    prototype: HTMLAmplifyLinkElement;
    new (): HTMLAmplifyLinkElement;
  };

  interface HTMLAmplifyPasswordFieldElement extends Components.AmplifyPasswordField, HTMLStencilElement {}
  const HTMLAmplifyPasswordFieldElement: {
    prototype: HTMLAmplifyPasswordFieldElement;
    new (): HTMLAmplifyPasswordFieldElement;
  };

  interface HTMLAmplifyRadioButtonElement extends Components.AmplifyRadioButton, HTMLStencilElement {}
  const HTMLAmplifyRadioButtonElement: {
    prototype: HTMLAmplifyRadioButtonElement;
    new (): HTMLAmplifyRadioButtonElement;
  };

  interface HTMLAmplifySceneElement extends Components.AmplifyScene, HTMLStencilElement {}
  const HTMLAmplifySceneElement: {
    prototype: HTMLAmplifySceneElement;
    new (): HTMLAmplifySceneElement;
  };

  interface HTMLAmplifySceneLoadingElement extends Components.AmplifySceneLoading, HTMLStencilElement {}
  const HTMLAmplifySceneLoadingElement: {
    prototype: HTMLAmplifySceneLoadingElement;
    new (): HTMLAmplifySceneLoadingElement;
  };

  interface HTMLAmplifySectionElement extends Components.AmplifySection, HTMLStencilElement {}
  const HTMLAmplifySectionElement: {
    prototype: HTMLAmplifySectionElement;
    new (): HTMLAmplifySectionElement;
  };

  interface HTMLAmplifySelectElement extends Components.AmplifySelect, HTMLStencilElement {}
  const HTMLAmplifySelectElement: {
    prototype: HTMLAmplifySelectElement;
    new (): HTMLAmplifySelectElement;
  };

  interface HTMLAmplifySignInElement extends Components.AmplifySignIn, HTMLStencilElement {}
  const HTMLAmplifySignInElement: {
    prototype: HTMLAmplifySignInElement;
    new (): HTMLAmplifySignInElement;
  };

  interface HTMLAmplifySignUpElement extends Components.AmplifySignUp, HTMLStencilElement {}
  const HTMLAmplifySignUpElement: {
    prototype: HTMLAmplifySignUpElement;
    new (): HTMLAmplifySignUpElement;
  };

  interface HTMLAmplifyTooltipElement extends Components.AmplifyTooltip, HTMLStencilElement {}
  const HTMLAmplifyTooltipElement: {
    prototype: HTMLAmplifyTooltipElement;
    new (): HTMLAmplifyTooltipElement;
  };

  interface HTMLAmplifyUsernameFieldElement extends Components.AmplifyUsernameField, HTMLStencilElement {}
  const HTMLAmplifyUsernameFieldElement: {
    prototype: HTMLAmplifyUsernameFieldElement;
    new (): HTMLAmplifyUsernameFieldElement;
  };

  interface HTMLRockPaperScissorElement extends Components.RockPaperScissor, HTMLStencilElement {}
  const HTMLRockPaperScissorElement: {
    prototype: HTMLRockPaperScissorElement;
    new (): HTMLRockPaperScissorElement;
  };
  interface HTMLElementTagNameMap {
    'amplify-auth-fields': HTMLAmplifyAuthFieldsElement;
    'amplify-authenticator': HTMLAmplifyAuthenticatorElement;
    'amplify-button': HTMLAmplifyButtonElement;
    'amplify-checkbox': HTMLAmplifyCheckboxElement;
    'amplify-code-field': HTMLAmplifyCodeFieldElement;
    'amplify-country-dial-code': HTMLAmplifyCountryDialCodeElement;
    'amplify-email-field': HTMLAmplifyEmailFieldElement;
    'amplify-examples': HTMLAmplifyExamplesElement;
    'amplify-forgot-password': HTMLAmplifyForgotPasswordElement;
    'amplify-form-field': HTMLAmplifyFormFieldElement;
    'amplify-form-section': HTMLAmplifyFormSectionElement;
    'amplify-hint': HTMLAmplifyHintElement;
    'amplify-icon': HTMLAmplifyIconElement;
    'amplify-icon-button': HTMLAmplifyIconButtonElement;
    'amplify-input': HTMLAmplifyInputElement;
    'amplify-label': HTMLAmplifyLabelElement;
    'amplify-link': HTMLAmplifyLinkElement;
    'amplify-password-field': HTMLAmplifyPasswordFieldElement;
    'amplify-radio-button': HTMLAmplifyRadioButtonElement;
    'amplify-scene': HTMLAmplifySceneElement;
    'amplify-scene-loading': HTMLAmplifySceneLoadingElement;
    'amplify-section': HTMLAmplifySectionElement;
    'amplify-select': HTMLAmplifySelectElement;
    'amplify-sign-in': HTMLAmplifySignInElement;
    'amplify-sign-up': HTMLAmplifySignUpElement;
    'amplify-tooltip': HTMLAmplifyTooltipElement;
    'amplify-username-field': HTMLAmplifyUsernameFieldElement;
    'rock-paper-scissor': HTMLRockPaperScissorElement;
  }
}

declare namespace LocalJSX {
  interface AmplifyAuthFields {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields'?: FormFieldTypes | string[];
  }
  interface AmplifyAuthenticator {
    /**
    * Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp
    */
    'initialAuthState'?: AuthState;
  }
  interface AmplifyButton {
    /**
    * (Optional) Callback called when a user clicks on the button
    */
    'handleButtonClick'?: (evt: Event) => void;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * Type of the button: 'button', 'submit' or 'reset'
    */
    'type'?: ButtonTypes;
  }
  interface AmplifyCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled'?: boolean;
    /**
    * Field ID used for the 'htmlFor' in the label
    */
    'fieldId'?: string;
    /**
    * Label for the checkbox
    */
    'label'?: string;
    /**
    * Name of the checkbox
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * Value of the checkbox
    */
    'value'?: string;
  }
  interface AmplifyCodeField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the code label
    */
    'label'?: string;
    /**
    * Used for the placeholder label
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required'?: boolean;
    'value'?: string;
  }
  interface AmplifyCountryDialCode {
    /**
    * The options of the country dial code select input.
    */
    'options'?: CountryCodeDialOptions;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
  }
  interface AmplifyEmailField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the EMAIL label
    */
    'label'?: string;
    /**
    * Used for the placeholder label
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required'?: boolean;
  }
  interface AmplifyExamples {}
  interface AmplifyForgotPassword {
    'formFields'?: FormFieldTypes;
    'handleAuthStateChange'?: (nextAuthState: AuthState, data?: object) => void;
    'handleSend'?: (event: Event) => void;
    'handleSubmit'?: (event: Event) => void;
    'headerText'?: string;
    'overrideStyle'?: boolean;
    'submitButtonText'?: string;
  }
  interface AmplifyFormField {
    /**
    * The text of the description.  Goes between the label and the input.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * The text of a hint to the user as to how to fill out the input.  Goes just below the input.
    */
    'hint'?: string | FunctionalComponent | null;
    /**
    * The text of the label.  Goes above the input. Ex: 'First name'
    */
    'label'?: string | null;
    /**
    * (Optional) String value for the name of the input.
    */
    'name'?: string;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required'?: boolean;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
    'value'?: string;
  }
  interface AmplifyFormSection {
    /**
    * (Required) Function called upon submission of form
    */
    'handleSubmit'?: (inputEvent: Event) => void;
    /**
    * Used for form section header
    */
    'headerText'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    'primaryFooterContent'?: string | FunctionalComponent;
    'secondaryFooterContent'?: string | FunctionalComponent | null;
    /**
    * (Optional) Used as a the default value within the default footer slot
    */
    'submitButtonText'?: string;
  }
  interface AmplifyHint {
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
  }
  interface AmplifyIcon {
    /**
    * (Required) Name of icon used to determine the icon rendered
    */
    'name'?: IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
  }
  interface AmplifyIconButton {
    'autoShowTooltip'?: boolean;
    'name'?: IconNameType;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    'tooltip'?: string | null;
  }
  interface AmplifyInput {
    /**
    * The text of the description.  Goes just below the label.
    */
    'description'?: string | null;
    /**
    * The ID of the field.  Should match with its corresponding input's ID.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * (Optional) String value for the name of the input.
    */
    'name'?: string;
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users.
    */
    'placeholder'?: string;
    /**
    * The input type.  Can be any HTML input type.
    */
    'type'?: TextFieldTypes;
    'value'?: string;
  }
  interface AmplifyLabel {
    'htmlFor'?: string;
    'overrideStyle'?: boolean;
  }
  interface AmplifyLink {
    'overrideStyle'?: boolean;
    'role'?: string;
  }
  interface AmplifyPasswordField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used as the hint in case you forgot your password, etc.
    */
    'hint'?: string | FunctionalComponent | null;
    /**
    * Used for the password label
    */
    'label'?: string;
    /**
    * Used for the placeholder label
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required'?: boolean;
    'value'?: string;
  }
  interface AmplifyRadioButton {
    /**
    * If `true`, the radio button is selected.
    */
    'checked'?: boolean;
    /**
    * If `true`, the checkbox is disabled
    */
    'disabled'?: boolean;
    /**
    * Field ID used for the 'for' in the label
    */
    'fieldId'?: string;
    /**
    * Label for the radio button
    */
    'label'?: string;
    /**
    * (Optional) Name of radio button
    */
    'name'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) Value of radio button
    */
    'value'?: string;
  }
  interface AmplifyScene {
    'sceneName'?: string;
  }
  interface AmplifySceneLoading {
    'loadPercentage'?: number;
    'sceneError'?: AmplifySceneError | null;
    'sceneName'?: string;
  }
  interface AmplifySection {
    'overrideStyle'?: boolean;
    'role'?: string;
  }
  interface AmplifySelect {
    /**
    * Used for id field
    */
    'fieldId'?: string;
    /**
    * The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number}
    */
    'options'?: SelectOptionsString | SelectOptionsNumber;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
  }
  interface AmplifySignIn {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields'?: FormFieldTypes | string[];
    'handleAuthStateChange'?: (nextAuthState: AuthState, data?: object) => void;
    /**
    * Fires when sign in form is submitted
    */
    'handleSubmit'?: (Event) => void;
    /**
    * Used for header text in sign in component
    */
    'headerText'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * Used for the submit button text in sign in component
    */
    'submitButtonText'?: string;
    /**
    * Engages when invalid actions occur, such as missing field, etc.
    */
    'validationErrors'?: string;
  }
  interface AmplifySignUp {
    /**
    * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc. by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing text for a label or adjust a placeholder, you can follow the structure below in order to do just that. ``` [   {     type: 'username'|'password'|'email'|'code'|'default',     label: string,     placeholder: string,     hint: string | Functional Component | null,     required: boolean   } ] ```
    */
    'formFields'?: FormFieldTypes | string[];
    /**
    * Passed from the Authenticatior component in order to change Authentication states e.g. SignIn -> 'Create Account' link -> SignUp
    */
    'handleAuthStateChange'?: (nextAuthState: AuthState, data?: object) => void;
    /**
    * Fires when sign up form is submitted
    */
    'handleSubmit'?: (submitEvent: Event) => void;
    /**
    * Used for the submit button text in sign up component
    */
    'haveAccountText'?: string;
    /**
    * Used for header text in sign up component
    */
    'headerText'?: string;
    /**
    * (Optional) Overrides default styling
    */
    'overrideStyle'?: boolean;
    /**
    * Used for the submit button text in sign up component
    */
    'signInText'?: string;
    /**
    * Used for the submit button text in sign up component
    */
    'submitButtonText'?: string;
    /**
    * Engages when invalid actions occur, such as missing field, etc.
    */
    'validationErrors'?: string;
  }
  interface AmplifyTooltip {
    /**
    * (Optional) Override default styling
    */
    'overrideStyle'?: boolean;
    /**
    * (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered
    */
    'shouldAutoShow'?: boolean;
    /**
    * (Required) The text in the tooltip
    */
    'text'?: string;
  }
  interface AmplifyUsernameField {
    /**
    * Based on the type of field e.g. sign in, sign up, forgot password, etc.
    */
    'fieldId'?: string;
    /**
    * The callback, called when the input is modified by the user.
    */
    'handleInputChange'?: (inputEvent: Event) => void;
    /**
    * Used for the username label
    */
    'label'?: string;
    /**
    * Used for the placeholder label
    */
    'placeholder'?: string;
    /**
    * The required flag in order to make an input required prior to submitting a form
    */
    'required'?: boolean;
    'value'?: string;
  }
  interface RockPaperScissor {
    'icon'?: Function;
    'onIconChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'amplify-auth-fields': AmplifyAuthFields;
    'amplify-authenticator': AmplifyAuthenticator;
    'amplify-button': AmplifyButton;
    'amplify-checkbox': AmplifyCheckbox;
    'amplify-code-field': AmplifyCodeField;
    'amplify-country-dial-code': AmplifyCountryDialCode;
    'amplify-email-field': AmplifyEmailField;
    'amplify-examples': AmplifyExamples;
    'amplify-forgot-password': AmplifyForgotPassword;
    'amplify-form-field': AmplifyFormField;
    'amplify-form-section': AmplifyFormSection;
    'amplify-hint': AmplifyHint;
    'amplify-icon': AmplifyIcon;
    'amplify-icon-button': AmplifyIconButton;
    'amplify-input': AmplifyInput;
    'amplify-label': AmplifyLabel;
    'amplify-link': AmplifyLink;
    'amplify-password-field': AmplifyPasswordField;
    'amplify-radio-button': AmplifyRadioButton;
    'amplify-scene': AmplifyScene;
    'amplify-scene-loading': AmplifySceneLoading;
    'amplify-section': AmplifySection;
    'amplify-select': AmplifySelect;
    'amplify-sign-in': AmplifySignIn;
    'amplify-sign-up': AmplifySignUp;
    'amplify-tooltip': AmplifyTooltip;
    'amplify-username-field': AmplifyUsernameField;
    'rock-paper-scissor': RockPaperScissor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'amplify-auth-fields': LocalJSX.AmplifyAuthFields & JSXBase.HTMLAttributes<HTMLAmplifyAuthFieldsElement>;
      'amplify-authenticator': LocalJSX.AmplifyAuthenticator & JSXBase.HTMLAttributes<HTMLAmplifyAuthenticatorElement>;
      'amplify-button': LocalJSX.AmplifyButton & JSXBase.HTMLAttributes<HTMLAmplifyButtonElement>;
      'amplify-checkbox': LocalJSX.AmplifyCheckbox & JSXBase.HTMLAttributes<HTMLAmplifyCheckboxElement>;
      'amplify-code-field': LocalJSX.AmplifyCodeField & JSXBase.HTMLAttributes<HTMLAmplifyCodeFieldElement>;
      'amplify-country-dial-code': LocalJSX.AmplifyCountryDialCode & JSXBase.HTMLAttributes<HTMLAmplifyCountryDialCodeElement>;
      'amplify-email-field': LocalJSX.AmplifyEmailField & JSXBase.HTMLAttributes<HTMLAmplifyEmailFieldElement>;
      'amplify-examples': LocalJSX.AmplifyExamples & JSXBase.HTMLAttributes<HTMLAmplifyExamplesElement>;
      'amplify-forgot-password': LocalJSX.AmplifyForgotPassword & JSXBase.HTMLAttributes<HTMLAmplifyForgotPasswordElement>;
      'amplify-form-field': LocalJSX.AmplifyFormField & JSXBase.HTMLAttributes<HTMLAmplifyFormFieldElement>;
      'amplify-form-section': LocalJSX.AmplifyFormSection & JSXBase.HTMLAttributes<HTMLAmplifyFormSectionElement>;
      'amplify-hint': LocalJSX.AmplifyHint & JSXBase.HTMLAttributes<HTMLAmplifyHintElement>;
      'amplify-icon': LocalJSX.AmplifyIcon & JSXBase.HTMLAttributes<HTMLAmplifyIconElement>;
      'amplify-icon-button': LocalJSX.AmplifyIconButton & JSXBase.HTMLAttributes<HTMLAmplifyIconButtonElement>;
      'amplify-input': LocalJSX.AmplifyInput & JSXBase.HTMLAttributes<HTMLAmplifyInputElement>;
      'amplify-label': LocalJSX.AmplifyLabel & JSXBase.HTMLAttributes<HTMLAmplifyLabelElement>;
      'amplify-link': LocalJSX.AmplifyLink & JSXBase.HTMLAttributes<HTMLAmplifyLinkElement>;
      'amplify-password-field': LocalJSX.AmplifyPasswordField & JSXBase.HTMLAttributes<HTMLAmplifyPasswordFieldElement>;
      'amplify-radio-button': LocalJSX.AmplifyRadioButton & JSXBase.HTMLAttributes<HTMLAmplifyRadioButtonElement>;
      'amplify-scene': LocalJSX.AmplifyScene & JSXBase.HTMLAttributes<HTMLAmplifySceneElement>;
      'amplify-scene-loading': LocalJSX.AmplifySceneLoading & JSXBase.HTMLAttributes<HTMLAmplifySceneLoadingElement>;
      'amplify-section': LocalJSX.AmplifySection & JSXBase.HTMLAttributes<HTMLAmplifySectionElement>;
      'amplify-select': LocalJSX.AmplifySelect & JSXBase.HTMLAttributes<HTMLAmplifySelectElement>;
      'amplify-sign-in': LocalJSX.AmplifySignIn & JSXBase.HTMLAttributes<HTMLAmplifySignInElement>;
      'amplify-sign-up': LocalJSX.AmplifySignUp & JSXBase.HTMLAttributes<HTMLAmplifySignUpElement>;
      'amplify-tooltip': LocalJSX.AmplifyTooltip & JSXBase.HTMLAttributes<HTMLAmplifyTooltipElement>;
      'amplify-username-field': LocalJSX.AmplifyUsernameField & JSXBase.HTMLAttributes<HTMLAmplifyUsernameFieldElement>;
      'rock-paper-scissor': LocalJSX.RockPaperScissor & JSXBase.HTMLAttributes<HTMLRockPaperScissorElement>;
    }
  }
}


