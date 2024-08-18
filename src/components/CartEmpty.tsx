import React from "react";
import { useNavigate } from 'react-router-dom';
import { EmptyMovieList, Button } from "../styles/HomeStyles";
import emptyListImage from "../images/empty-list.png";

const CartEmpty: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <EmptyMovieList>
      <p>Parece que nao ha nada por aqui :(</p>
      <img src={emptyListImage} alt="Lista vazia" />
      <Button onClick={handleGoHome}>VOLTAR</Button>
    </EmptyMovieList>
  );
};

export default CartEmpty;
