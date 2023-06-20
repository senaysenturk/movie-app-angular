import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../service/alertify.service';

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
  constructor(private alertify: AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }
  ngOnInit(): void {}
  addRemoveList($event: any, movieId: number) {
    const index = this.movieList.indexOf(movieId);
    if (index === -1) {
      this.movieList.push(movieId);
      this.alertify.success(
        `${this.movies.find((movie) => movie.id == movieId)?.title} added`
      );
    } else {
      this.movieList.splice(index, 1);
      this.alertify.error(
        `${this.movies.find((movie) => movie.id == movieId)?.title} removed`
      );
    }
    // console.log(this.movieList);

    return this.movieList;
  }
  isInList(movieId: number) {
    return this.movieList.includes(movieId);
  }
}
