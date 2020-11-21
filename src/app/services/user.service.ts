import {environment} from 'src/environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API_BACKEND = environment.API_ENDPOINT
  constructor(
    private httpClient: HttpClient,
  ) { }

  getUsers(): Observable<any>{
    const URL_ENDPOINT = this.API_BACKEND+"users?page=1";
    return this.httpClient.get(URL_ENDPOINT);
  }
  getUser(id): Observable<any>{
    const URL_ENDPOINT = this.API_BACKEND+"users/"+id;
    return this.httpClient.get(URL_ENDPOINT);
  }
  addUser(data): Observable<any>{
    const URL = this.API_BACKEND+"users";
    return this.httpClient.post(URL,data);
  }

  editUser(id,data): Observable<any>{
    const URL = this.API_BACKEND+"users/"+id;
    return this.httpClient.put(URL,data);
  }

  deleteUser(id): Observable<any>{
    const URL = this.API_BACKEND+"users/"+id;
    return this.httpClient.delete(URL);
  }

  logingFunction(data){
    const URL = this.API_BACKEND+"login";
    return this.httpClient.post(URL,data);
  }
}
