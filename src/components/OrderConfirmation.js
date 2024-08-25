import React from 'react';
import { useParams } from 'react-router-dom';

function OrderConfirmation() {
  const { orderId } = useParams();

  return (
    <div className="order-confirmation">
      <h2>Compra realizada com sucesso!</h2>
      <p>Seu ID de confirmação é: <strong>{orderId}</strong></p>
      <p>Obrigado por comprar conosco!</p>
    </div>
  );
}

export default OrderConfirmation;
