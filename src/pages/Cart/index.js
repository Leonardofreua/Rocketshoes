import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
                alt="Shoes"
              />
            </td>
            <td>
              <strong>Descrição do tênis</strong>
              <span>$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#28a745" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#28a745" />
                </button>
              </div>
            </td>
            <td>
              <strong>$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#28a745" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Check out</button>

        <Total>
          <span>TOTAL</span>
          <strong>$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
