import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wefit-movies.vercel.app/api',
});

export const getMovies = async () => {
  try {
    const response = await api.get('/movies'); 
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error; 
  }
};
