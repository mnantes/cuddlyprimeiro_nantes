import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cart, addItemToCart } = useContext(CartContext);

  const handleIncrement = (item) => {
    if (item.quantity < 5) {
      addItemToCart(item, 1);
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      addItemToCart(item, -1);
    }
  };

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <div className="cart-item-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
