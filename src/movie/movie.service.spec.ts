/* eslint-disable @typescript-eslint/unbound-method */

import { MovieService } from './movie.service';
import { GetMoviesUseCase } from './domain/usecases/get-movies.usecase';

describe('MovieService', () => {
  let movieService: MovieService;
  let mockUseCase: jest.Mocked<GetMoviesUseCase>;

  const mockMovies = [
    {
      id: 1,
      title: 'Inception',
      overview: '...',
      release_date: '2010-07-16',
      release_year: '2010',
      popularity: 80,
      vote_average: 7.5,
      poster_path: 'some-url',
      backdrop_path: 'some-url',
      adult: false,
    },
  ];

  beforeEach(() => {
    mockUseCase = {
      execute: jest.fn().mockResolvedValue(mockMovies),
    } as unknown as jest.Mocked<GetMoviesUseCase>;

    movieService = new MovieService(mockUseCase);
  });

  it('should return popular movies from use case', async () => {
    const result = await movieService.getPopularMovies(1, 'en');

    expect(result).toEqual(mockMovies);
    expect(mockUseCase.execute).toHaveBeenCalledWith(1, 'en');
  });

  it('should throw if use case throws', async () => {
    mockUseCase.execute.mockRejectedValueOnce(new Error('Failed to fetch'));

    await expect(movieService.getPopularMovies(1, 'en')).rejects.toThrow(
      'Failed to fetch',
    );
  });
});
