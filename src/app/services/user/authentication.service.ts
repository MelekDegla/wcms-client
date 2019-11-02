import { Injectable } from '@angular/core';
import {Login} from '../../models/Login';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.webservice.baseUrl;

  constructor(private http: HttpClient ) { }
  public authenticate(login: Login) {

    return  this.http.post(this.baseUrl + 'token', login);
  }

}
