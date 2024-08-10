import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getItemsByCategory } from '../data/data';
import '../styles/Item.css';  

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItemsByCategory(id));
  }, [id]);

  return (
    <div>
      <h2>Nosso Catálogo de Ursos de Pelúcia</h2>
      <div className="item-list">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
