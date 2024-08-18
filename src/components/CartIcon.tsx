import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import cartImage from '../images/cart-icon.svg';

const CartIconContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  /* Media query for smaller screens (adjust breakpoint as needed) */
  @media (max-width: 768px) {
    flex-direction: column;  // Stack elements vertically
    align-items: flex-start; // Align to the left
  }
`;

const CartLabel = styled.span`
  margin-right: 10px; 
  font-size: 1rem;
  font-weight: bold;
  color: #FFF;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartIconImage = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
`;

const CartItemCount = styled.span`
  position: absolute;
  top: 100%;
  left: 60%;
  display: flex;

  transform: translateX(-50%);
  padding: 3px 6px;
  color: #999999;
  font-size: 12px;

  @media (max-width: 768px) {
    top: 50%; // Position at the middle vertically
    left: -40px; // Adjust left position as needed
    transform: translateY(-50%); // Center vertically
  }
`;

const ItemCountText = styled.span`
  margin-left: 5px;
  color: #999999;
  font-size: 12px;
`;

const CartIcon: React.FC = () => {
  const { sumQuantity } = useContext(CartContext);

  const quantity = sumQuantity();
  return (
    <CartIconContainer to="/cart">
      <CartLabel>Meu Carrinho</CartLabel>
      <CartIconImage src={cartImage} alt="Carrinho" />
      {quantity > 0 && <CartItemCount>{quantity}
      <ItemCountText>itens</ItemCountText> 
      </CartItemCount>}
    </CartIconContainer>
  );
};

export default CartIcon;
