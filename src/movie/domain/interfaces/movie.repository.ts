import { Movie } from '../entities/movie.entity';

export interface MovieRepository {
  getPopularMovies(page: number): Promise<Movie[]>;
}
