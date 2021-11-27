import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent } from './components/modulos/modulos.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/usuarios/login.component';
import { CarrerasComponent } from './components/carreras/carreras.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'modulos', component: ModulosComponent},
  { path: 'carreras', component: CarrerasComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});