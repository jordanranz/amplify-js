/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import { injectGlobal } from 'emotion'

injectGlobal`
  :root {
    /* Colors */
    --amazon-orange: #ff9900;
    --light-amazon-orange: #ffac31;
    --dark-amazon-orange: #e88b01;
    --squid-ink: #232f3e;
    --light-squid-ink: #31465f;
    --deep-squid-ink: #152939;
    --grey: #828282;
    --light-grey: #c4c4c4;
    --silver: #e1e4ea;
    --dark-blue: #31465f;
    --red: #dd3f5b;
    --white: #ffffff;
    --light-blue: #00a1c9;
    --amplify-yellow-warning: #f8d047;
    --amplify-red-problem: #cc1454;

    /* Theme */
    /* All of the variables below can be used within any application that does an @import inside of their application */
    --button-color: var(--white);
    --button-background-color: var(--amazon-orange);
    --button-background-color-danger: var(--color-danger);
    --button-click: var(--dark-amazon-orange);
    --section-background-color: var(--white);
    --section-header-color: var(--deep-squid-ink);
    --label-color: var(--deep-squid-ink);
    --link-color: var(--amazon-orange);
    --hint-color: var(--grey);
    --form-color: var(--white);
    --input-color: var(--deep-squid-ink);
    --input-background-color: var(--white);
    --input-border-color: var(--light-grey);
    --primary-font-size: 1em;
    --secondary-font-size: 0.875em;
    --third-font-size: 0.813em;

    --font-family: 'Amazon Ember', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
    --body-background: #f8f4f4;

    /** Angular Theme **/
    --component-width-desktop: 460px;
    --component-width-mobile: 100%;

    --color-primary: #ff9900;
    --color-primary-accent: #232f3e;
    --color-primary-highlight: #ffc46d;

    --color-background: #232f3e;

    --color-secondary: #152939;
    --color-secondary-accent: #31465f;

    --color-danger: #dd3f5b;
    --color-error: #d0021b;

    --color-accent-brown: #828282;
    --color-accent-blue: #e1e4ea;

    --gradient-blaze: linear-gradient(270deg, #ffc300 0%, #ff9000 100%);

    --color-blue: #007eb9;
    --color-purple: #527fff;
    --color-gray: #828282;
    --color-white: #ffffff;

    --input-border: 1px solid #c4c4c4;
    --input-padding: 0.5em 0.5em 0.3em 1em;

    --box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.15);
    --button-height: 42px;

    --interactions-conversation-height: 250px;
  }
`;