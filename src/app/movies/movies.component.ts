import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from './movies.service';
@Component({
  selector: 'app-comp',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
moviesName = [];
  constructor(
    private Mservice: MoviesService,
    private r: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.r.params
      .switchMap((params: Params) => this.Mservice.searchMovie(params['movieName']))
      .subscribe(moviesName => this.moviesName = moviesName);
  }
}

