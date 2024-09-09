import React from 'react';
import logo from '../assets/logo.png'; // Certifique-se de que o logo está correto
import '../styles/Loading.css'; // Certifique-se de que o estilo está sendo importado corretamente
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa os ícones do font-awesome

function Loading() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" className="loading-logo" />
      <div className="spinner">
        <i className="fas fa-spinner fa-spin"></i> {/* Ícone de loading */}
      </div>
    </div>
  );
}

export default Loading;
