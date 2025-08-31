/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MovieService } from './movie.service';
import { Movie } from './domain/entities/movie.entity';

describe('MovieService', () => {
  it('should get popular movies from usecase', async () => {
    const mockMovies: Movie[] = [
      {
        id: 1,
        title: 'Matrix',
        overview: '...',
        popularity: 95,
        release_date: '1999-03-31',
      },
    ];

    const mockUseCase = {
      execute: jest.fn().mockResolvedValue(mockMovies),
    };

    const service = new MovieService(mockUseCase as any);
    const result = await service.getPopularMovies(1);

    expect(result).toEqual(mockMovies);
    expect(mockUseCase.execute).toHaveBeenCalledWith(1);
  });
});
