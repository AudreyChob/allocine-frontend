import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  id:string=""
  title :string= 'allocine-frontend';
  titre:string="";
  categorie :string= "";
  description:string="";
  public posts : any[]= [];
  search: string=""
  resultatRecherche: any[] = []
  public API_BACKEND = environment.API_ENDPOINT
  viewAll: boolean = true;


  constructor(
    private filmService: FilmService,
    private route: Router,
  ) { 
   console.debug("this.posts" +this.posts)
    this.init();
    this.viewAll = true;
  }

  ngOnInit(): void {
    this.viewAll = true;

  }
  recherche(search){
    console.debug(this.search)
    this.filmService.recherche(search).subscribe(result =>{
      this.resultatRecherche = result
    })
    this.viewAll = false;
  }
  init(){
    this.filmService.getFilms().subscribe(observer => {
      console.debug(observer)
      this.posts = observer['hydra:member']
    })
  }

  deleteFilm(id){
    this.filmService.deleteFilm(id).subscribe(event=>{
      this.init();
    })
  }

  commenter(id){
    console.debug(id)
    this.route.navigate(['/commentaires', id]);
  }

}
