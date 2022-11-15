import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cndv } from './cndv';

@Injectable({
  providedIn: 'root'
})
export class CndvService {

  private baseUrl = "http://localhost:8999/dcdsd";

  constructor(private httpClient: HttpClient) { }

  getCndvsList(index:number,request : Object): Observable<Cndv[]> {
    return this.httpClient.post<Cndv[]>(`${this.baseUrl}/${index}`, request);
  }

  getCndvsListNoPaging(): Observable<Cndv[]> {
    return this.httpClient.get<Cndv[]>(this.baseUrl);
  }

  createCndv(cndv: Cndv): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/add`, cndv);
  }

  getCndvById(id: number): Observable<Cndv> {
    return this.httpClient.get<Cndv>(`${this.baseUrl}/${id}`);
  }
  updateCndv(id: number, cndv: Cndv): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, cndv);
  }

  deleteCndv(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
