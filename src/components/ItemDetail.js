import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import '../styles/ItemDetail.css';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addItem(item, quantityToAdd);
    console.log(`Adicionou ${quantityToAdd} ${item.name} ao carrinho`);
    navigate('/cart');
  };

  return (
    <div className="item-detail">
      <img src={item.imageUrl} alt={item.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p><strong>Descrição:</strong> {item.description}</p>
        <p><strong>Material:</strong> {item.material}</p>
        <p><strong>Cor:</strong> {item.color}</p>
        <p className="item-detail-price"><strong>Preço:</strong> R$ {item.price.toFixed(2)}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        {quantity > 0 && <button className="finish-purchase-button" onClick={() => navigate('/cart')}>Finalizar Compra</button>}
      </div>
    </div>
  );
}

export default ItemDetail;
