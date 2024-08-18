import styled from 'styled-components';
import CartIcon from './CartIcon';

const HeaderContainer = styled.header`
  background-color: #2F2E41;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* Adjust padding as needed */

  @media (max-width: 768px) { 
    flex-direction: column; 
    align-items: center; 
    padding: 0.5rem 1rem; 
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem; /* Increase logo font size */
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    margin-bottom: 0.5rem; 
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Adjust gap as needed */
`;

export const CartText = styled.span`
  font-size: 0.9rem; /* Slightly reduce cart text size */
`;

export const CartIcon = styled.div`
  font-size: 1.2rem; 
  cursor: pointer; 
`;

export const ItemCount = styled.span`
  background-color: #039B00;
  color: #FFF; 
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  position: relative; 
  top: -10px;
  left: 10px;
`;
