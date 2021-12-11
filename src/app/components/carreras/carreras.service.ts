import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carreras } from './carreras';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  url = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

    getCarreras(): Observable<Carreras[]> {
      return this.httpClient.get<Carreras[]>(`${this.url}/CarrerasTecnicas`);
    }
}
