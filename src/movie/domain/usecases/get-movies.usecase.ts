/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import type { MovieRepository } from '../interfaces/movie.repository';
import { Movie } from '../entities/movie.entity';
import { round } from '../../../utils/math';
import { IMAGE_BASE_URL } from '../../../utils/constants';
import { getYearFromDate } from '../../../utils/date';

@Injectable()
export class GetMoviesUseCase {
  constructor(private readonly movieRepo: MovieRepository) {}

  async execute(page: number = 1, language: string = 'en'): Promise<Movie[]> {
    const movies = await this.movieRepo.getPopularMovies(page, language);

    return movies.map((movie) => ({
      id: movie.id,
      adult: movie.adult,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      popularity: round(movie.popularity),
      vote_average: round(movie.vote_average),
      backdrop_path: `${IMAGE_BASE_URL}${movie.backdrop_path ?? ''}`,
      poster_path: `${IMAGE_BASE_URL}${movie.poster_path ?? ''}`,
      release_year: getYearFromDate(movie.release_date),
    }));
  }
}
