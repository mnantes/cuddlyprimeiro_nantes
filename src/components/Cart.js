import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <div>
          <p>Seu carrinho está vazio</p>
          <Link to="/">Voltar para a loja</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <h3>Preço Total: R$ {getTotalPrice().toFixed(2)}</h3>
          <button onClick={clear}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
