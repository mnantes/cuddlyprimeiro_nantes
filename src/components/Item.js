import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import '../styles/Item.css';

function Item({ item }) {
  const [quantity, setQuantity] = useState(0);
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addItemToCart(item, quantityToAdd);
    console.log(`Adicionou ${quantityToAdd} ${item.name} ao carrinho`);
    navigate('/cart'); // Redireciona para o carrinho após adicionar
  };

  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      <p className="item-price">R$ {item.price.toFixed(2)}</p>
      <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      {quantity > 0 && <button className="finish-purchase-button" onClick={() => navigate('/cart')}>Finalizar Compra</button>}
      <Link to={`/item/${item.id}`} className="item-detail-link">Ver detalhes</Link>
    </div>
  );
}

export default Item;
