import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  get(path: string, params = {}): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${path}`, { params });
  }

  post(path: string, body = {}, params = {}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}${path}`, body, { params });
  }

}
