import React, { useState } from 'react';
import '../styles/ItemDetail.css';  
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    console.log(`Adicionou ${quantityToAdd} ${item.name} ao carrinho`);
  };

  return (
    <div className="item-detail">
      <img src={item.imageUrl} alt={item.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="item-detail-price">R$ {item.price.toFixed(2)}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        {quantity > 0 && <button className="finish-purchase-button">Finalizar Compra</button>}
      </div>
    </div>
  );
}

export default ItemDetail;
