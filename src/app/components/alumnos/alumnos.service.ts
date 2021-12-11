import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AsignacionesAlumno } from '../asignaciones-alumno/asignaciones-alumno';
import { AuthService } from '../usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  
  getAsignacion(): Observable<AsignacionesAlumno[]> {
    return this.httpClient.get<AsignacionesAlumno[]>(`${this.url}/Alumnos/${this.authService.usuario.carne}/asignaciones`);
  }

}
