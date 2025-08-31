import { Injectable } from '@nestjs/common';
import { GetMoviesUseCase } from './domain/usecases/get-movies.usecase';

@Injectable()
export class MovieService {
  constructor(private readonly getMoviesUseCase: GetMoviesUseCase) {}

  async getPopularMovies(page: number, language: string) {
    return this.getMoviesUseCase.execute(page, language);
  }
}
