import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public API_BACKEND = environment.API_ENDPOINT
  constructor(
    private httpClient: HttpClient,
  ) { }

  getNotes(): Observable<any>{
    const URL_ENDPOINT = this.API_BACKEND+"notes?page=1";
    return this.httpClient.get(URL_ENDPOINT);
  }

  addNote(data): Observable<any>{
    const URL = this.API_BACKEND+"notes";
    return this.httpClient.post(URL,data);
  }

  deleteNote(id): Observable<any>{
    const URL = this.API_BACKEND+"notes/"+id;
    return this.httpClient.delete(URL);
  }
}
