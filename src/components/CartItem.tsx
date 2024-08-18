import styled from 'styled-components';
import { Movie } from '../types/movie';

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  margin-right: 15px;
`;

const CartItemInfo = styled.div`
  flex: 1;
`;

const CartItemTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const CartItemPrice = styled.p`
  font-size: 14px;
  color: #666;
`;

const CartItemRemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #dc3545;

  &:hover {
    text-decoration: underline;
  }
`;

interface CartItemProps {
  item: Movie;
  onRemove: (movieId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={item.poster_path || item.image} alt={item.title} /> 
      <CartItemInfo>
        <CartItemTitle>{item.title}</CartItemTitle>
        <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
      </CartItemInfo>
      <CartItemRemoveButton onClick={() => onRemove(item.id)}>Remover</CartItemRemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
