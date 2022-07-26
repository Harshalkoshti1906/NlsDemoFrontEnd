import { Component, OnInit } from '@angular/core';
import { SystemapiService } from '../_service/systemapi.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {

  MovieCatalog:any[];
  public response:any;
  loaderPlay:boolean = false;

  constructor(private data:SystemapiService) { }

  ngOnInit(): void {
    this.loaderPlay = true;
    this.data.getMovieCatalog().subscribe(res => {
      this.response = res
      if(this.response.status == 1){
        this.loaderPlay = false;
        this.MovieCatalog = this.response.data;
      } 
    })
  }

}
