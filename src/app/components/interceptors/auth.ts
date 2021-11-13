import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { AuthService } from "../usuarios/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(
        private router: Router, 
        private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError( e => {
                if (e.status === 401) {
                    if (!this.authService.isAuthenticated) {
                        this.authService.logout();
                    }
                    this.router.navigate(['/login']);
                }
                if (e.status === 403) {
                    Swal.fire({
                        icon: 'error', 
                        title: 'Login failed',
                        text: `Credenciales Inválidas !`,
                        footer: 'Kalum v1.0.0'});
                    this.router.navigate(['/home'])
                }
                return throwError(e);

            })
        )
    }
}
