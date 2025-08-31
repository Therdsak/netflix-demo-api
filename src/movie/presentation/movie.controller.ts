import {
  Controller,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
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
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error.',
  })
  async getPopularMovies(@Query() query: GetMoviesDto): Promise<Movie[]> {
    try {
      return await this.movieService.getPopularMovies(
        query.page ?? 1,
        query.language ?? 'en',
      );
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
      throw new InternalServerErrorException('Something went wrong.');
    }
  }
}
