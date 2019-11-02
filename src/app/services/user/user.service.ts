import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../../models/Login';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.webservice.baseUrl;
  private headers: HttpHeaders;
  private http: HttpClient;
  constructor( ) { }


  public findUserWithToken() {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.get(this.baseUrl + 'auth', { headers : this.headers});
  }
}
