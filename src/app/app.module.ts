import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { AlertifyService } from './service/alertify.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    FooterComponent,
    MovieFilterPipe,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, HttpClientModule],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
