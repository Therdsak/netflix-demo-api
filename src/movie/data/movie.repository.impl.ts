/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/interfaces/movie.repository';
import { Movie } from '../domain/entities/movie.entity';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class MovieRepositoryImpl implements MovieRepository {
  private readonly url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc';
  private readonly options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${process.env.TMDB_API_KEY || ''}`,
    },
  };

  async getPopularMovies(page: number): Promise<Movie[]> {
    const response = await fetch(`${this.url}&page=${page}`, this.options);
    if (!response.ok) {
      throw new Error('Failed to fetch movies from TMDB');
    }
    const data = await response.json();
    return data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      overview: item.overview,
      popularity: item.popularity,
      release_date: item.release_date,
    }));
  }
}
