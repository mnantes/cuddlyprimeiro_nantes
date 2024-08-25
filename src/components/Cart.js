import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from '../firebaseConfig';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cart, removeItem, clear, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const createOrder = async () => {
    const order = {
      buyer: {
        name: "Nome do Usuário",
        phone: "123456789",
        email: "usuario@email.com"
      },
      items: cart.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      date: Timestamp.fromDate(new Date()),
      total: getTotalPrice()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Ordem criada com ID: ", docRef.id);
      clear(); // Limpa o carrinho após a compra ser realizada
      navigate(`/order-confirmation/${docRef.id}`);
    } catch (e) {
      console.error("Erro ao criar ordem: ", e);
    }
  };

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <div>
          <p>Seu carrinho está vazio</p>
          <Link to="/">Voltar para a loja</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <h3>Preço Total: R$ {getTotalPrice().toFixed(2)}</h3>
          <button onClick={clear}>Limpar Carrinho</button>
          <button onClick={createOrder}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
