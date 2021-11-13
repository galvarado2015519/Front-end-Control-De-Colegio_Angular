import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../usuarios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  private _name: string;
  private _authenticated: boolean;

  public get name(): string {
    if (this.authService) {
      this._name = this.authService.usuario.name;
      return this._name;
    }
    return null;
  }

  public get authenticated(): boolean {
    if (this.authService) {
      this._authenticated = this.authService.isAuthenticated();
      return this._authenticated;
    }
    return null;
  }

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  logout() : void {
    const name = this.name;
    this.authService.logout();

    Swal.fire({
      icon: 'success',
      title: 'Logout',
      text: `Hasta luego ${name} !`,
      footer: 'Kalum v1.0.0'
    }).then((result) =>{
      if(result.isConfirmed) {
        console.log('Entra al logout')
        this.router.navigate(['/login']);
      }
    })
  }
}
