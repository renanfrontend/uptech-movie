import { useEffect, useState, useContext } from "react";
import { getMovies } from "../services/api";
import MovieList from "../components/MovieList";
import LoadingSpinner from "../components/LoadingSpinner";
import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import { Movie } from "../types/movie";
import { HomeContainer, EmptyMovieList, Button } from "../styles/HomeStyles";
import emptyListImage from "../images/empty-list.png";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToCart: contextAddToCart, cartItems: contextCartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovies();
        if (data) {
          setMovies(data.products);
        } else {
          console.error("A API não retornou dados válidos.");
        }
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleAddToCart = (movie: Movie) => {
    contextAddToCart(movie); 
  };

  // Transforma o array cartItems em um objeto com a estrutura esperada por MovieList
  const transformedCartItems = contextCartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {} as { [movieId: number]: number });

  return (
    <div>
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <HomeContainer>
          {movies?.length > 0 ? (
            <MovieList
              movies={movies}
              onAddToCart={handleAddToCart}
              cartItems={transformedCartItems}
            />
          ) : (
            <EmptyMovieList>
              <p>Parece que nao ha nada por aqui :(</p>
              <img src={emptyListImage} alt="Lista vazia" />
              <Button onClick={() => window.location.reload()}>
                Recarregar a página
              </Button>
            </EmptyMovieList>
          )}
        </HomeContainer>
      )}
    </div>
  );
};

export default Home;