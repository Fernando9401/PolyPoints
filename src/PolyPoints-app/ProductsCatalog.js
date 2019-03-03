import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

/**
 * @customElement
 * @polymer
 */

class ProductsCatalog extends PolymerElement {
    
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #customers {
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 80%;
          }
          
          #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          #customers tr:hover {background-color: #ddd;}
          
          #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #2D89F6;
            color: white;
          }
      </style>
      <table id="customers">
    <tr>
        <th>Producto más comprado</th>
        <th>Puntos requeridos</th>
        <th>Comercios disponibles</th>
    </tr>
    <tr>
        <td><img src="img/smartwatch.jpg" alt="purse" width="50px" height="50px"> SmartWatch</td>
        <td>20200</td>
        <td>Palacio de Hierro</td>
    </tr>
    <tr>
        <td><img src="img/purse.jpg" alt="purse" width="50px" height="50px"> Bolsa Louis Vuitton</td>
        <td>67000</td>
        <td>Liverpool</td>
    </tr>
    <tr>
        <td><img src="img/belt.jpg" alt="purse" width="50px" height="50px"> Cinturon GUCCI</td>
        <td>5000</td>
        <td>Sears</td>
    </tr>
    <tr>
        <td><img src="img/book.jpg" alt="purse" width="50px" height="50px"> Libro El Principito</td>
        <td>3000</td>
        <td>Sears</td>
    </tr>
    `;
  }
  static get properties() {
    return {
      points: {
        type: String,
        value: 'text'
      }
    };
  }
}

window.customElements.define('products-catalog-app', ProductsCatalog);
