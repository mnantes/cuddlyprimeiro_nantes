import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import { CartProvider } from './context/CartContext';
import './styles/App.css'; 
import './styles/Background.css';
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png'; 
import cloud3 from './assets/cloud3.png'; 
import Loading from './components/Loading'; // Importa o componente de loading

function App() {
  const [loading, setLoading] = useState(true); // Estado de loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Após 5 segundos, o loading desaparece
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timeout ao desmontar
  }, []);

  if (loading) {
    return <Loading />; // Exibe o componente de loading enquanto o estado for true
  }

  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* Nuvens no fundo */}
          <img src={cloud1} alt="Cloud 1" className="cloud" />
          <img src={cloud2} alt="Cloud 2" className="cloud" />
          <img src={cloud3} alt="Cloud 3" className="cloud" />

          {/* Navbar e outros componentes */}
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
