import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/CartWidget.css';

function CartWidget() {
  const { getCartQuantity } = useContext(CartContext);
  const quantity = getCartQuantity();

  if (quantity === 0) {
    return null; // Não mostrar o widget se o carrinho estiver vazio
  }

  return (
    <Link to="/cart" className="cart-widget">
      <span>Carrinho ({quantity})</span>
    </Link>
  );
}

export default CartWidget;
