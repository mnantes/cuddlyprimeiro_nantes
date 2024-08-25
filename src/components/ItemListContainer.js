import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../firebaseConfig';
import Item from './Item';
import '../styles/Item.css';

function ItemListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let q;
      if (id) {
        q = query(collection(db, "items"), where("category", "==", id));
      } else {
        q = collection(db, "items");
      }
      const querySnapshot = await getDocs(q);
      const itemsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsArray);
    };

    fetchItems();
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
