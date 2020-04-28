import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'amplify-toast',
  styleUrl: 'amplify-toast.scss',
  shadow: true,
})
export class AmplifyToast {
  /** Used in order to add a dismissable `x` for the Toast component */
  @Prop() handleClose: () => void;
  /** Message to be displayed inside the toast*/
  @Prop() message: string = '';

  /* 
  TODO #170365145: Work on a helper function that will populate and 
  update class colors for success / warning / failure messages 
  */

  render() {
    return (
      <Host class="toast">
        <amplify-icon class="toast-icon" name="warning" />
        {this.message ? <span>{this.message}</span> : null}
        <slot />
        <button class="toast-close" onClick={this.handleClose} />
      </Host>
    );
  }
}
