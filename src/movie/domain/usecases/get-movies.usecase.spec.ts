import { GetMoviesUseCase } from './get-movies.usecase';
import { IMAGE_BASE_URL } from '../../../utils/constants';
import { getYearFromDate } from '../../../utils/date';
import { round } from '../../../utils/math';

describe('GetMoviesUseCase', () => {
  const mockRepository = {
    getPopularMovies: jest.fn(),
  };

  const useCase = new GetMoviesUseCase(mockRepository);

  it('should return popular movies from repository', async () => {
    const mockInput = [
      {
        id: 1,
        title: 'Inception',
        overview: '...',
        release_date: '2010-07-16',
        popularity: 80.123,
        vote_average: 7.8,
        poster_path: '/xyz.jpg',
        backdrop_path: '/abc.jpg',
        adult: false,
      },
    ];

    const expectedOutput = [
      {
        id: 1,
        title: 'Inception',
        overview: '...',
        release_date: '2010-07-16',
        release_year: getYearFromDate('2010-07-16'),
        popularity: round(80.123),
        vote_average: round(7.8),
        poster_path: `${IMAGE_BASE_URL}/xyz.jpg`,
        backdrop_path: `${IMAGE_BASE_URL}/abc.jpg`,
        adult: false,
      },
    ];

    mockRepository.getPopularMovies.mockResolvedValue(mockInput);

    const result = await useCase.execute(1, 'en');

    expect(mockRepository.getPopularMovies).toHaveBeenCalledWith(1, 'en');
    expect(result).toEqual(expectedOutput);
  });

  it('should use default values when no arguments are provided', async () => {
    mockRepository.getPopularMovies.mockResolvedValue([]);

    await useCase.execute();

    expect(mockRepository.getPopularMovies).toHaveBeenCalledWith(1, 'en');
  });
});
