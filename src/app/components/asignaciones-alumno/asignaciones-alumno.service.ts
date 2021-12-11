import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignacionesAlumno } from './asignaciones-alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesAlumnoService {

  url = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAsignaciones(): Observable<AsignacionesAlumno[]> {
    return this.httpClient.get<AsignacionesAlumno[]>(`${this.url}/asignaciones`);
  }

  saveAsignacion(asignacion: AsignacionesAlumno): Observable<any> {
    return this.httpClient.post(`${this.url}/asignaciones`,  asignacion);
  }

  deleteAsignacion(asignacionId: string) {
    return this.httpClient.delete(`${this.url}/asignaciones/${asignacionId}`);
  }
}
