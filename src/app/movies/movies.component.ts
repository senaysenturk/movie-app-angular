import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../service/alertify.service';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  apiURL: string = 'http://localhost:5500';
  movieList: any = [];
  //movieRepository: MovieRepository;
  searchMovie: string = '';
  btn: any;
  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService
  ) {
    // this.movieRepository = new MovieRepository();
    // this.movies = this.movieRepository.getMovies();
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
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
