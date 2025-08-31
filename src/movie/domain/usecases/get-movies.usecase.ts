// src/movie/domain/usecases/get-movies.usecase.ts

import { Injectable } from '@nestjs/common';
import type { MovieRepository } from '../interfaces/movie.repository';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class GetMoviesUseCase {
  constructor(private readonly movieRepo: MovieRepository) {}

  async execute(page: number = 1): Promise<Movie[]> {
    return this.movieRepo.getPopularMovies(page);
  }
}
