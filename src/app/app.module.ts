import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'path/:movieName',  component: MoviesComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MoviesComponent
  ],
  exports: [
  RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
