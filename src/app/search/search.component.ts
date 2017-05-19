import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
 constructor( private router: Router ) { }
  ngOnInit() {
  }
  searchMovie(movieName: string) {
    this.router.navigate(['path', movieName]);
};
}
