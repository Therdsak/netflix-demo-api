import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  @ApiProperty({ example: 123, description: 'Unique identifier of the movie' })
  id: number;

  @ApiProperty({ example: 'Inception', description: 'Title of the movie' })
  title: string;

  @ApiProperty({
    example: 'A mind-bending thriller...',
    description: 'Movie overview or synopsis',
  })
  overview: string;

  @ApiProperty({
    example: '2010-07-16',
    description: 'Background image of the movie',
  })
  backdrop_path: string;

  @ApiProperty({
    example: '2010-07-16',
    description: 'Poster image of the movie',
  })
  poster_path: string;

  @ApiProperty({ example: 4.3, description: 'Vote Average of the movie' })
  vote_average: number;

  @ApiProperty({ example: 85.7, description: 'Popularity score of the movie' })
  popularity: number;

  @ApiProperty({
    example: '2010-07-16',
    description: 'Release date of the movie',
  })
  release_date: string;

  @ApiProperty({
    example: '2010',
    description: 'Release year of the movie',
  })
  release_year: string;

  @ApiProperty({
    example: false,
    description:
      'This is an 18+ rated movie or content intended for adults only.',
  })
  adult: boolean;
}
