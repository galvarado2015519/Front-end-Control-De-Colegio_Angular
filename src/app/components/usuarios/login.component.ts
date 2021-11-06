import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  usuario: Usuario;

  constructor(
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login() : void {
    if (!this.usuario.email || !this.usuario.password) {
      Swal.fire(
        {
          icon: 'error',
          title: 'Login failed',
          text: 'Usuario o contraseña incorrectos !',
          footer: 'Kalum V1.0.0'
        }
      );
    } else {
      this.userService.login(this.usuario).subscribe(
        (data: any) => {
          if (data.token) {
            const payload = this.userService.getToken(data.token);
            this.userService.saveToken(data.token);
            this.userService.saveUser(payload);

            Swal.fire({
              icon: 'success', 
              title: 'Login success',
              text: `Bienvenido ${payload.email} al sistema !`,
              footer: 'Kalum v1.0.0'})
              .then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['/home']);
                }
              })
          }
        },
        (error: any) => {
          if (error.status == 400) {
            Swal.fire({
              icon: 'error', 
              title: 'Login failed',
              text: `Credenciales Inválidas !`,
              footer: 'Kalum v1.0.0'});
          } else {
            Swal.fire({
              icon: 'error', 
              title: 'Service failed',
              text: `Error de comunicación con el servicio !`,
              footer: 'Kalum v1.0.0'});
          }
        }
      );
    }
    return;
  }
}
