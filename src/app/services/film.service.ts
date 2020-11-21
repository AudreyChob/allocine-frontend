import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public API_BACKEND = environment.API_ENDPOINT
  constructor(
    private httpClient: HttpClient,
  ) { }

  getFilms(): Observable<any>{
    const URL_ENDPOINT = this.API_BACKEND+"films?page=1";
    return this.httpClient.get(URL_ENDPOINT);
  }
  getFilm(id): Observable<any>{
    const URL_ENDPOINT = this.API_BACKEND+"films/"+id;
    return this.httpClient.get(URL_ENDPOINT);
  }
  addFilm(data): Observable<any>{
    const URL = this.API_BACKEND+"films";
    return this.httpClient.post(URL,data);
  }

  editFilm(id,data): Observable<any>{
    const URL = this.API_BACKEND+"films/"+id;
    return this.httpClient.put(URL,data);
  }

  deleteFilm(id): Observable<any>{
    const URL = this.API_BACKEND+"films/"+id;
    return this.httpClient.delete(URL);
  }

  recherche(search): Observable<any>{
    const URL = this.API_BACKEND +"films.json?titre="+search
    return this.httpClient.get<any[]>(URL);
  }
  
}
