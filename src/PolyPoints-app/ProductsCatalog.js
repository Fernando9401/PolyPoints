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
      </style>

    <table>
        <tr>
          <th>Agregar a la lista</th>
          <th>Producto más vendido</th>
          <th>Precio puntos Bancomer</th>
          <th>Comercio con covenio</th>
          <th>Puntos restantes</th>
        </tr>
            <template is="dom-repeat" items="[[products]]">
                <tr>
                    <td><input type="checkbox" name="sel" value=""></td>
                    <td><img src="[[item.imagen]]" alt="image" width="50px" height="50px"> [[item.name]]</td>
                    <td>[[item.precio]]</td>
                    <td>Sears</td>
                    <td>[[restante(item.precio)]]</td>
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
                    imagen: 'img/book.jpg',
                    name: 'Libro El Principito',
                    precio: 3000,
                    comercio: 'Sears'
                },
                {
                    imagen: 'img/smartwatch.jpg',
                    name: 'smartwatch',
                    precio: 20200,
                    comercio: 'Liverpool'
                },
                {
                    imagen: 'img/belt.jpg',
                    name: 'belt',
                    precio: 5000,
                    comercio: 'Sears'
                },
                {
                    imagen: 'img/purse.jpg',
                    name: 'purse',
                    precio: 67000,
                    comercio: 'Liverpool'
                }]
            }
        };
    }

    restante(precio){
        var puntos = 220000;
        var result = puntos - precio;
        return result;
    }
}

window.customElements.define('products-catalog-app', ProductsCatalog);
