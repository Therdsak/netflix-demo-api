/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsInt, Min, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class GetMoviesDto {
  @ApiPropertyOptional({ description: 'Page number', example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Language code (th or en)',
    example: 'th',
    default: 'en',
  })
  @IsOptional()
  @IsIn(['th', 'en'], { message: 'language must be either "th" or "en"' })
  language?: string = 'en';
}
