import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const HeaderContainer = styled.header`
  background-color: #2F2E41; 
  color: #FFF; 
  padding: 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;

const HeaderLogo = styled(Link)`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  align-self: flex-start; 
  color: #FFF; 
  text-decoration: none; 
  cursor: pointer; 

  @media (max-width: 768px) {
    margin-bottom: 10px;  
  }

  &:hover {
    opacity: 0.8; 
  }
`;

const HeaderCart = styled.div`
  align-self: flex-end; 

  @media (max-width: 768px) {
    margin-bottom: 10px;  
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">WeMovie</HeaderLogo>
      <HeaderCart>
        <CartIcon />
      </HeaderCart>
    </HeaderContainer>
  );
};

export default Header;
