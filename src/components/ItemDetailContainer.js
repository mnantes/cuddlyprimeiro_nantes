import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebaseConfig';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("Nenhum item encontrado!");
      }
    };

    fetchItem();
  }, [id]);

  return item ? <ItemDetail item={item} /> : <p>Carregando...</p>;
}

export default ItemDetailContainer;
