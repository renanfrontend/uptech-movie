import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../styles/HomeStyles';
import styled from 'styled-components';
import imageSuccess from '../images/image-success.png';

const OrderConfirmedContainer = styled.div`
  width: 100%; 
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px; 
  background-color: #fff; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

const SuccessImage = styled.img`
  max-width: 200px; 
  margin: 20px auto;
  display: block;
  justify-content: center; 
`;

const OrderConfirmedMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const OrderConfirmed: React.FC = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <OrderConfirmedContainer>
      <OrderConfirmedMessage>Compra realizada com sucesso!</OrderConfirmedMessage>
      <SuccessImage src={imageSuccess} alt="Pedido confirmado" /> 
      <Button onClick={handleGoHome}>VOLTAR</Button>
    </OrderConfirmedContainer>
  );
};

export default OrderConfirmed;
