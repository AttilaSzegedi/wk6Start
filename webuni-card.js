/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class WebuniCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 32px;
        /*jobb mint a sima fekete color: #424242;*/
        color: #424242;
        font-family: 'Roboto', sans-serif;
        box-shadow: 0 3px 15px rgba(0,0,0,0.2);
        /* box-shadow: 0 3px 15px rgba(0,0,0,0.2); kellemes shadow ad vissza*/
        border-radius: 10px;
      }
      
    `;
  }

  static get properties() {
    return {
      /**
       * The new property is titel to add Heading injection.
       * @title {string}
       */
      title: {type: String},

    };
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">
      <h1>${this.title} </h1>
      <slot></slot>
    `;
  }
}

window.customElements.define('webuni-card', WebuniCard);
