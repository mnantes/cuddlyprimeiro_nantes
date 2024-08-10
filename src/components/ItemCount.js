import React, { useState } from 'react';
import '../styles/ItemDetail.css'; 

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrement} className="count-button">-</button>
      <span className="count-display">{count}</span>
      <button onClick={increment} className="count-button">+</button>
      <button onClick={() => onAdd(count)} className="add-to-cart-button">Adicionar ao Carrinho</button>
    </div>
  );
}

export default ItemCount;
