import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  erro: any;
  totalPages: any;
  txTituloPesquisa: String;

  constructor(private moviesService: MoviesService) {
    this.getter();
  }
  ngOnInit() {
  }
  getter() {
    this.moviesService.getAllMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.totalPages = data.total_pages;

      console.log(this.totalPages);
      console.log(data);
    }, error => {
      this.erro = error;
    }
    )
  }
  detalhar(movie: any) {

  }

  nextProviusPage(ev) {
    this.moviesService.setPage(ev.pageIndex)
    this.getter();
  }
  buscar() {
    if (this.txTituloPesquisa != '') {
      this.movies = this.movies.filter(res => {
        return res.title.toLocaleLowerCase().match(this.txTituloPesquisa.toLocaleLowerCase());
      })
    } else
      this.ngOnInit();
  }

}
