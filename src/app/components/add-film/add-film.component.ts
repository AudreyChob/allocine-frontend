import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  id:string=""
  titre:string="";
  categorie :string= "";
  description:string="";
  public posts : any[]= [];

  constructor(
    private httpClient: HttpClient,
    private filmService: FilmService,
    private route : Router
  ) { }

  ngOnInit(): void {
  }
  
  addFilm(){
    const data = {
      titre: this.titre,
      categorie: this.categorie,
      description: this.description,
      type: "Film"
    };
    this.filmService.addFilm(data).subscribe(event=>{
      console.debug(data)
    })
    setTimeout(() => {
    this.route.navigate(['/films'])      
    }, 300);
  }


}
