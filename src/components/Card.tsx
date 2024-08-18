import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
