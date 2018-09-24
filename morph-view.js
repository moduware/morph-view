import { MorphElement } from '@polymer/morph-element/morph-element.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `morph-view`
 * View where we put all our elements
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MorphView extends MorphElement(PolymerElement) {
  static get template() {
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
      reveal: {
        type: String, // reveal can take a value of left or right
        reflectToAttribute: true
      }
    };
  }
}

window.customElements.define(MorphView.is, MorphView);
