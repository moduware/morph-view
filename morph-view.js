import { LitElement, html } from '@polymer/lit-element';
import { getPlatform } from '@moduware/lit-utils';

/**
 * `morph-view`
 * View where we put all our elements
 *
 * @customElement
 * @extends HTMLElement
 * @demo demo/index.html
 */
export class MorphView extends LitElement {
  render() {
    return html`
    <style>

      :host {
        --reveal-width: 260px;

        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        z-index: 1;
        background-color: white;
      }

      :host([reveal="left"]) {
        transform: translate3d(var(--reveal-width), 0, 0);
      }

      :host([reveal="right"]) {
        transform: translate3d(calc(-1 * var(--reveal-width)), 0, 0);
      }

      :host([platform="android"][reveal]) {
        z-index: 5000;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      }

      :host([platform="android"]) {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        transition: 300ms;
      }

      :host([platform="ios"]) {
        transition: 400ms;
        background: #efeff4;
      }

      :host(.not-animated) {
        transition: 0ms;
      }

    </style>

    <slot></slot>
    `;
  }

  static get is() { return 'morph-view'; }
  static get properties() {
    return {
      platform: { 
        type: String,
        reflect: true
      },
      
      reveal: {
        type: String, // reveal can take a value of left or right
        reflect: true
      }
    };
  }

  /**
   * LitElement lifecycle called when element is first updated. 
   */
  firstUpdated() {
    super.firstUpdated();
    // platform is set if no attribute set in html markup
    if (!this.hasAttribute('platform')) {
      // getPlatform() is checking what device or platform and return android or ios or windows-phone or unknown
      this.platform = getPlatform();
    }
  } 
}

window.customElements.define(MorphView.is, MorphView);
