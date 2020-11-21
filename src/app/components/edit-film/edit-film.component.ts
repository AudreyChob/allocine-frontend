
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {
  id:string=""
  titre:string="";
  categorie :string= "";
  description:string="";
  public posts : any[]= [];


  constructor(
    private filmService: FilmService,
    private actRoute: ActivatedRoute,
    private route : Router

  ) { 
    this.id = this.actRoute.snapshot.params.id;
    console.debug(this.id)
    this.getFilm(this.id)
  }

  ngOnInit(): void {

  }
  getFilm(id){
    this.filmService.getFilm(this.id).subscribe(data=>{
      console.debug(data);
      this.titre = data.titre;
      this.categorie = data.categorie;
      this.description = data.description;
    })
  }

  editFilm(){
    const data = {
      id:this.id,
      titre: this.titre,
      categorie: this.categorie,
      description: this.description,
      type: "Film"
    };
    this.filmService.editFilm(this.id,data).subscribe(event=>{
      console.debug(data);
    })
    setTimeout(() => {
      this.route.navigate(['/films'])      
    }, 300);
  }
}
