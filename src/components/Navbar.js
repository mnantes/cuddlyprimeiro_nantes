import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { getCartQuantity } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">Cuddly Cloud</Link>
      <div className="nav-links">
        <Link to="/category/urso-grande">Ursos Grandes</Link>
        <Link to="/category/urso-pequeno">Ursos Pequenos</Link>
        <Link to="/category/urso-medio">Ursos Médios</Link>
        <Link to="/cart">
          Carrinho {getCartQuantity() > 0 && <span>({getCartQuantity()})</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
