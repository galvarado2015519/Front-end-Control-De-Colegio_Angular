import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/usuarios/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './components/usuarios/auth.service';
import { ClasesService } from './components/home/clases.service';
import { AuthInterceptor } from './components/interceptors/auth';
import { TokenInterceptor } from './components/interceptors/token';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { AsignacionesAlumnoComponent } from './components/asignaciones-alumno/asignaciones-alumno.component';
import { FormAsignacionAlumnoComponent } from './components/asignaciones-alumno/form-asignacion-alumno/form-asignacion-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModulosComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    CarrerasComponent,
    AsignacionesAlumnoComponent,
    FormAsignacionAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    ClasesService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
