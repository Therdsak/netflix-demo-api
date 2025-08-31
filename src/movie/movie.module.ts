/* eslint-disable @typescript-eslint/no-unsafe-argument */
// src/movie/movie.module.ts
import { Module } from '@nestjs/common';
import { MovieController } from './presentation/movie.controller';
import { MovieService } from './movie.service';
import { GetMoviesUseCase } from './domain/usecases/get-movies.usecase';
import { MovieRepositoryImpl } from './data/movie.repository.impl';

@Module({
  controllers: [MovieController],
  providers: [
    MovieService,
    GetMoviesUseCase,
    {
      provide: 'MovieRepository',
      useClass: MovieRepositoryImpl,
    },
    {
      provide: GetMoviesUseCase,
      useFactory: (movieRepo) => new GetMoviesUseCase(movieRepo),
      inject: ['MovieRepository'],
    },
  ],
  exports: [MovieService],
})
export class MovieModule {}
