import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Carreras } from './carreras';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  url = 'http://localhost:8088/kalum-notas/v1';

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

    getCarreras(): Observable<Carreras[]> {
      return this.httpClient.get<Carreras[]>(`${this.url}/CarrerasTecnicas`);
    }
}
