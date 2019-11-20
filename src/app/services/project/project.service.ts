import { Injectable } from '@angular/core';
import {Project} from '../../models/Project';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseurl = environment.webservice.baseUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  add(project: Project) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.post(this.baseurl + 'projects', project, {
      headers: this.headers
    });
  }

  list(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.get(this.baseurl + 'projects', {
      headers: this.headers
    });
  }

  remove(id) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.delete(this.baseurl + 'projects/' + id, {
      headers: this.headers
    });
  }

  modify(project) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.put(this.baseurl + 'projects/', project , {
      headers: this.headers
    });
  }
  findById(id): Observable<Project> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    // @ts-ignore
    return this.http.get(this.baseurl + 'projects/' + id, {
      headers: this.headers
    });
  }
}

