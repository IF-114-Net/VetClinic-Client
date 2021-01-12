import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getEntity(entity: string, id?: number): Observable<any> {
    return this.http.get(`${environment.BASEURL}/${entity}/${id ? id : ''}`);
  }

  addEntity(entity: string, payload: any): Observable<any> {
    return this.http.post(`${environment.BASEURL}/${entity}`, payload);
  }

  updateEntity(entity: string, id: number, payload: any): Observable<any> {
    return this.http.put(`${environment.BASEURL}/${entity}/${id}`, payload);
  }

  deleteEntity(entity: string, id: number): Observable<any> {
    return this.http.delete(`${environment.BASEURL}/${entity}/${id}`);
  }
}
