// import { Controller, Get, Query } from '@nestjs/common';
// import { ApiTags, ApiResponse } from '@nestjs/swagger';
// import { GetMoviesUseCase } from '../domain/usecases/get-movies.usecase';
// import { MovieRepositoryImpl } from '../data/movie.repository.impl';
// import { GetMoviesDto } from './dto/get-movies.dto';
// import { Movie } from '../domain/entities/movie.entity';

// @ApiTags('movies')
// @Controller('movies')
// export class MovieController {
//   private readonly getMoviesUseCase = new GetMoviesUseCase(
//     new MovieRepositoryImpl(),
//   );

//   @Get()
//   @ApiResponse({
//     status: 200,
//     description: 'List of popular movies',
//     type: [Movie],
//   })
//   async getPopularMovies(@Query() query: GetMoviesDto) {
//     const page = query.page ?? 1;
//     return this.getMoviesUseCase.execute(page);
//   }
// }

// src/movie/presentation/movie.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { MovieService } from '../movie.service';
import { GetMoviesDto } from './dto/get-movies.dto';
import { Movie } from '../domain/entities/movie.entity';

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of popular movies.',
    type: [Movie],
  })
  async getPopularMovies(@Query() query: GetMoviesDto): Promise<Movie[]> {
    return this.movieService.getPopularMovies(query.page ?? 1);
  }
}
