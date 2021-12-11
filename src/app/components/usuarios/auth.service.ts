import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from './auth.interface';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;
  url = `${environment.baseUrl}/cuentas/login`;

  constructor(private http: HttpClient) { }

  authToken() {
    
  }

  login(usuario: Usuario): Observable<any> {
    const urlHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.url, usuario, {headers: urlHeaders});
  }

  logout() : void {
    this._token = null;
    this._usuario = null;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
  }

  getToken( token: string):any {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  public get token() : string {
    if (this._token) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token')) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  public get usuario(): Usuario {
    if(this._usuario) {
      return this._usuario;
    } else if (!this._usuario && sessionStorage.getItem('user')) {
      this._usuario = JSON.parse(sessionStorage.getItem('user')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  saveUser(payload: any): void {
    this._usuario = payload;
    sessionStorage.setItem('user', JSON.stringify(this._usuario));
  }

  saveToken(token: string): void {
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    const payload: Auth = this.getToken(this.token);
    if (payload && payload.username.length > 0) {
      return true
    }
    return false;
  }

  isTokenExpired(): boolean {
    const now = new Date().getTime() / 1000;
    if (this.getToken(this.token).exp < now) {
      return true;
    }
    return false;
  }
}
