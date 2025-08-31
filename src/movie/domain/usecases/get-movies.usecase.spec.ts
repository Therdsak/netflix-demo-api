import { GetMoviesUseCase } from './get-movies.usecase';
import { Movie } from '../entities/movie.entity';

describe('GetMoviesUseCase', () => {
  it('should return popular movies from repository', async () => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'Inception',
        overview: '...',
        popularity: 80,
        release_date: '2010-07-16',
        backdrop_path: '',
        poster_path: '',
        vote_average: 0,
        release_year: '',
        adult: false,
      },
    ];

    const mockRepository = {
      getPopularMovies: jest.fn().mockResolvedValue(mockMovies),
    };

    const useCase = new GetMoviesUseCase(mockRepository);
    const result = await useCase.execute(1);

    expect(result).toEqual(mockMovies);
    expect(mockRepository.getPopularMovies).toHaveBeenCalledWith(1);
  });
});
