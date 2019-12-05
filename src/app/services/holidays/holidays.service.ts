import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Holiday} from '../../models/holiday';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  private baseUrl = environment.webservice.baseUrl;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  add(holiday: Holiday) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.post(this.baseUrl + 'holidays', holiday, {
      headers: this.headers
    });
  }

  list(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.get(this.baseUrl + 'holidays', {
      headers: this.headers
    });
  }
  remove(id: number) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.delete(this.baseUrl + 'holidays/' + id, {
      headers: this.headers
    });
  }
  modify(holiday: Holiday) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.put(this.baseUrl + 'holidays', holiday , {
      headers: this.headers
    });
  }
}
