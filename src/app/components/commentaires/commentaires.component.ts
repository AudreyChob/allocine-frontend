import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { FilmService } from 'src/app/services/film.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  id:string;
  titre:string="";
  categorie :string= "";
  description:string="";
  notes: any[] = [];
  commentaires: any[]=[];
  commentaire:string;
  user: string
  constructor(
    private filmService: FilmService,
    private noteService: NoteService,
    private commentaireService: CommentaireService,
    private actRoute: ActivatedRoute,
    private route : Router
  ) { 
    this.id = this.actRoute.snapshot.params.id;
    this.init();
  }

  ngOnInit(): void {
  }

  init(){
    this.filmService.getFilm(this.id).subscribe(data=>{
      console.debug(data)
      this.titre = data.titre;
      this.categorie = data.categorie;
      this.description = data.description;
      this.notes = data.notes;
      this.commentaires = data.commentaires;
      console.debug(JSON.stringify(this.commentaires) + " " + JSON.stringify(this.notes))
    })
  }

  addCommentaire(){
    const data= {
      commentaire: this.commentaire,
      user: "api/users/4",
      film: "api/films/"+this.id
    }
    console.debug(data)
    this.commentaireService.addCommentaire(data).subscribe(event=>{
      console.debug(data);
    })
    setTimeout(() => {
      this.init()    
      }, 500);
  }

}
