import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/usuarios/login.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { AsignacionesAlumnoComponent } from './components/asignaciones-alumno/asignaciones-alumno.component';
import { FormAsignacionAlumnoComponent } from './components/asignaciones-alumno/form-asignacion-alumno/form-asignacion-alumno.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'modulos', component: ModulosComponent},
  { path: 'carreras', component: CarrerasComponent},
  { path: 'asignaciones', component: AsignacionesAlumnoComponent},
  { path: 'asignaciones/form/:id', component: FormAsignacionAlumnoComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});