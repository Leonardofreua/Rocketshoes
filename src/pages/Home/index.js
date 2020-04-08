import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { Productlist } from './styles';

export default function Home() {
  return (
    <Productlist>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-nike-court-royale-masculino/26/D12-1936-026/D12-1936-026_zoom2.jpg?ts=1585887454&ims=326x"
          alt="Shoes"
        />
        <strong>Shoes</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Add to Cart</span>
        </button>
      </li>
    </Productlist>
  );
}
