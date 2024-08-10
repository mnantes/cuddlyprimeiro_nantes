import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css';  

function Item({ item }) {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      <p className="item-price">R$ {item.price.toFixed(2)}</p>
      <Link to={`/item/${item.id}`} className="item-detail-link">Ver detalhes</Link>
    </div>
  );
}

export default Item;
