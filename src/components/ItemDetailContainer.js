import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItemById } from '../data/data';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = getItemById(id);
    setItem(foundItem);
  }, [id]);

  return item ? <ItemDetail item={item} /> : <p>Carregando...</p>;
}

export default ItemDetailContainer;
