import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  public API_BACKEND = environment.API_ENDPOINT
  token: string;
  constructor(
    private httpClient: HttpClient,
  ) { }

  getToken(){
    let _ = this;
    _.token = localStorage.getItem('token')
    return _.token;
  }
  getCommentaires(): Observable<any>{
    let _ = this;
    const URL_ENDPOINT = this.API_BACKEND+"commentairess?page=1";
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'bearer ' + this.getToken()
    });
    return this.httpClient.get(URL_ENDPOINT, {headers: httpHeaders});
  }
  addCommentaire(data): Observable<any>{
    let _ = this;
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'bearer ' + this.getToken()
    });
    const URL = this.API_BACKEND+"commentaires";
    return this.httpClient.post(URL,data, {headers: httpHeaders});
  }
  deleteCommentaires(id): Observable<any>{
    let _ = this;
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'bearer ' + this.getToken(),
    });
    console.debug("headers : " + httpHeaders)
    const URL = this.API_BACKEND+"commentaires/"+id;
    return this.httpClient.delete(URL, {headers: httpHeaders});
  }

}
