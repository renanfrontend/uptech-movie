import { Movie } from './movie';

export interface CartItem extends Movie {
  quantity: number;
}