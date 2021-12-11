import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clase } from './clase';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private urlEndPoint = `${environment.baseUrl}/clases`;
  // private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : `Bearer ${sessionStorage.getItem('token')}`});

  constructor(private httpClient: HttpClient) { }

  getClases(): Observable<Clase[]> { 
    return this.httpClient.get<Clase[]>(this.urlEndPoint);
  }

  getClase(id: string): Observable<Clase[]> { 
    return this.httpClient.get<Clase[]>(`${this.urlEndPoint}/${id}`);
  }
}
