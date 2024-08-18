import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CartIconContainer = styled(Link)`
  position: relative;
  display: flex; 
  align-items: center; 
`;

export const CartLabel = styled.span`
  margin-right: 10px; 
  font-size: 1rem; 
  font-weight: bold; 
  color: #FFF; 
`;

export const CartIconImage = styled.img`
  width: 24px;
  height: 24px;
  position: relative; 
`;

export const CartItemCount = styled.span`
  position: absolute;
  top: -8px; // Ajuste para posicionar acima e à direita
  right: -8px;
  display: flex;
  align-items: center; // Centraliza o texto e o número verticalmente
  justify-content: center; // Centraliza o texto e o número horizontalmente

  background-color: #039B00; 
  color: white;
  border-radius: 50%; 
  padding: 3px 6px;
  font-size: 12px;
  min-width: 20px; // Garante um tamanho mínimo para o contador
  min-height: 20px;
`;

export const ItemCountText = styled.span`
  margin-left: 5px; 
`;
