import { Movie } from '../types/movie';
import styled from 'styled-components';
import shoppingCartImage from '../images/shoppingcart.png';

// Assuming these are defined in your 'HomeStyles' file
import {
  MovieCard,
  MovieInfo,
  MovieImage,
  MoviePrice,
  MovieTitle,
} from '../styles/HomeStyles';

interface MovieListProps {
  movies: Movie[];
  onAddToCart: (movie: Movie) => void;
  cartItems: { [movieId: number]: number };
}

// Estilos do componente MovieList - ajuste para telas desktop
const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const AddToCartButton = styled.button<{ itemCount?: number }>`
  background-color: ${({ itemCount }) => (itemCount && itemCount > 0 ? '#039B00' : '#007bff')};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ itemCount }) => (itemCount && itemCount > 0 ? '#039B00' : '#0056b3')};
  }

  .item-count {
    color: white;
    border-radius: 50%;
    padding: 0 2px;
    font-size: 12px;
    /* min-width: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MovieList: React.FC<MovieListProps> = ({ movies, onAddToCart, cartItems }) => {
  return (
    <MovieListContainer>
      {Array.isArray(movies) &&
        movies.map((movie) => {

          return (
            <MovieCard key={movie.id}>
              <MovieImage src={movie.image} alt={movie.title} />
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MoviePrice>R$ {movie.price.toFixed(2)}</MoviePrice>
                <AddToCartButton
                  onClick={() => onAddToCart(movie)}
                  itemCount={movie.quantity}
                >
                  <img src={shoppingCartImage} alt="Adicionar ao Carrinho" />
                  {movie.quantity > 0 && (
                    <span className="item-count">{movie.quantity}</span>
                  )}
                  <span>ADICIONAR AO CARRINHO</span>
                </AddToCartButton>
              </MovieInfo>
            </MovieCard>
          );
        })}
    </MovieListContainer>
  );
};

export default MovieList;