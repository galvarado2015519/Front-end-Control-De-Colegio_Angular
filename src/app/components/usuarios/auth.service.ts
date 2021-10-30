import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;
  url =  'http://localhost:8088/kalum-notas/v1/cuentas/login';

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    const urlHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.url, usuario, {headers: urlHeaders});
  }

  getToken( token: string):any {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  saveUser(payload: any): void {
    this._usuario = payload;
    sessionStorage.setItem('token', JSON.stringify(this._usuario));
  }

  saveToken(token: string): void {
    this._token = token;
    sessionStorage.setItem('token', token);
  }
}
