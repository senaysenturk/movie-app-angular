import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  movieList: any = [];
  movieRepository: MovieRepository;
  searchMovie: string = '';
  btn: any;
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }
  ngOnInit(): void {}
  addRemoveList($event: any, movieId: number) {
    const index = this.movieList.indexOf(movieId);
    if (index === -1) {
      this.movieList.push(movieId);
      alertify.success('Movie added');
    } else {
      this.movieList.splice(index, 1);
      alertify.error('Movie removed');
    }
    // console.log(this.movieList);

    return this.movieList;
  }
  isInList(movieId: number) {
    return this.movieList.includes(movieId);
  }
}
