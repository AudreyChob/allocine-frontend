import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { FilmsComponent } from './components/films/films.component';
import { LogingComponent } from './components/loging/loging.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CommentairesComponent } from './components/commentaires/commentaires.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    EditFilmComponent,
    FilmsComponent,
    LogingComponent,
    InscriptionComponent,
    CommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
