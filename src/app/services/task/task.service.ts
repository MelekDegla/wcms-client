import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseurl = environment.webservice.baseUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  add(task) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.post(this.baseurl + 'tasks', task, {
      headers: this.headers
    });
  }

  list(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.get(this.baseurl + 'tasks', {
      headers: this.headers
    });
  }

  remove(id) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.delete(this.baseurl + 'tasks/' + id, {
      headers: this.headers
    });
  }

  modify(task) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.put(this.baseurl + 'tasks', task , {
      headers: this.headers
    });
  }
  findById(id): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    // @ts-ignore
    return this.http.get(this.baseurl + 'tasks/' + id, {
      headers: this.headers
    });
  }
  findLogsByProjectId(id) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.get(this.baseurl + 'logs/project/' + id, {headers: this.headers});
  }

  fileUpload(taskId, file) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});

    let formdata = new FormData();
    formdata.append('task_id', taskId);
    formdata.append('file', file);
    return this.http.post(this.baseurl + 'uploadFile', formdata, {
      headers: this.headers
    });
  }
  join(task) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.token});
    return this.http.put(this.baseurl + 'tasks/join', task , {
      headers: this.headers
    });
  }
}
