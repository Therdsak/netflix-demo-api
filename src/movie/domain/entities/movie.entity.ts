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

  @ApiProperty({ example: 85.7, description: 'Popularity score of the movie' })
  popularity: number;

  @ApiProperty({
    example: '2010-07-16',
    description: 'Release date of the movie',
  })
  release_date: string;
}
