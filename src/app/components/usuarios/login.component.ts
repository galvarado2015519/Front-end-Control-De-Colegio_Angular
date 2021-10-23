import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login() : void {
    console.log(this.usuario);
  }
}
