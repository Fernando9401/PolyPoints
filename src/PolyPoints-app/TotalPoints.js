import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

/**
 * @customElement
 * @polymer
 */
class TotalPoints extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          float: right;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          padding: 5px;
          margin-right: 20px;
        }

      </style>
        <div>
            <p>Tus puntos Bancomer son: [[points]]</p>
        </div>
    `;
  }
  static get properties() {
    return {
      points: {
        type: String,
        value: '220000'
      }
    };
  }
}

window.customElements.define('total-points-app', TotalPoints);
