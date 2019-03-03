import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
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

        table {
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 80%;
          }
          
          td, th {
            border: 1px solid #ddd;
            padding: 8px;
          }
            tr:hover {background-color: #ddd;}
          
          th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #2D89F6;
            color: white;
          }
          #maps-shop{
              width: 200px;
              height: 200px;
          }
      </style>

    <table>
        <tr>
          <th>Agregar a lista</th>
          <th>Producto más vendido</th>
          <th>Precio puntos Bancomer</th>
          <th>Comercio con covenio</th>
          <th>Puntos restantes</th>
        </tr>
        <template is="dom-repeat" items="[[products]]">
            <tr>
                <td><input type="checkbox" name="" value="true"></td>
                <td><img src="[[item.image]]" alt="image" width="50px" height="50px"> [[item.name]]</td>
                <td>[[item.price]]</td>
                <td>[[item.shop]]</td>
                <td>[[restante(item.price)]]</td>
            </tr>
        </template>
    </table>
    `;
    }
    static get properties() {
        return {
            points: {
                type: String,
                value: 'text'
            },
            products: {
                type: Array,
                value: [{
                    image: 'img/smartwatch.jpg',
                    name: 'Apple Watch',
                    price: 100000,
                    shop: 'Liverpool'
                },
                {
                    image: 'img/belt.jpg',
                    name: 'Cinturon GUCCI',
                    price: 5000,
                    shop: 'Sears'
                },
                {
                    image: 'img/purse.jpg',
                    name: 'Bolso Louis Vuitton',
                    price: 67000,
                    shop: 'Liverpool'
                },
                {
                    image: 'img/book.jpg',
                    name: 'Libro El Principito',
                    price: 3000,
                    shop: 'Sears'
                }]
            }
        };
    }

    restante(precio){
        var puntos = 90000;
        var result = puntos - precio;
        return result;
    }

}

window.customElements.define('products-catalog-app', ProductsCatalog);
