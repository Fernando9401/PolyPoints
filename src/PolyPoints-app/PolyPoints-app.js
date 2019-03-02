import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

/**
 * @customElement
 * @polymer
 */
class PolyPointsApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h3>Bienvenido [[prop1]]!</h3>
      <iron-icon icon="search"></iron-icon>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Fernando'
      }
    };
  }
}

window.customElements.define('poly-points-app', PolyPointsApp);
