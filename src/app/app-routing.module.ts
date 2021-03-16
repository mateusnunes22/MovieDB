import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    data: { title: 'Lista de filmes' }
  },
  {
    path: 'movie-detail',
    component: MovieDetailComponent,
    data: { title: 'Detalhe do filme' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
