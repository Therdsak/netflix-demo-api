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
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
  private readonly options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${process.env.TMDB_API_KEY || ''}`,
    },
  };

  async getPopularMovies(page: number, language: string): Promise<Movie[]> {
    const response = await fetch(
      `${this.url}&page=${page}&language=${language}`,
      this.options,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movies from TMDB');
    }
    const data = await response.json();
    return data.results;
  }
}
