import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Authorization} from '../models/Authorization';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
private  baseUrl = environment.webservice.baseUrl ;
  private headers: HttpHeaders;
  constructor(private  Http: HttpClient) { }
  add(authorization: Authorization) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.Http.post(this.baseUrl + 'authorization', authorization, {
      headers: this.headers
    });
  }
  list(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.Http.get(this.baseUrl + 'authorization', {
      headers: this.headers
    });
  }
  remove(id: number) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.Http.delete(this.baseUrl + 'authorization/' + id, {
      headers: this.headers
    });
  }

  modify(authorization: Authorization) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.Http.put(this.baseUrl + 'authorization', authorization , {
      headers: this.headers
    });
  }
  validate(authorization: Authorization) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.Http.put(this.baseUrl + 'authorization/validate', authorization , {
      headers: this.headers
    });
  }

}
