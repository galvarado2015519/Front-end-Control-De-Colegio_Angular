import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Clase } from '../../home/clase';
import { ClasesService } from '../../home/clases.service';
import { AuthService } from '../../usuarios/auth.service';
import { Usuario } from '../../usuarios/usuario';
import { AsignacionesAlumno } from '../asignaciones-alumno';
import { AsignacionesAlumnoService } from '../asignaciones-alumno.service';

@Component({
  selector: 'app-form-asignacion-alumno',
  templateUrl: './form-asignacion-alumno.component.html'
})
export class FormAsignacionAlumnoComponent implements OnInit {

  usuario: Usuario = <Usuario>{};
  clase: Clase = <Clase>{};
  asignacionAlumno: any = <any>{};

  constructor(
    private asignacionService: AsignacionesAlumnoService,
    private claseService: ClasesService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    let fechaAsignacion = moment(new Date()).format("YYYY-MM-DD");
    this.usuario = this.authService.usuario;

    this.activateRoute.paramMap.subscribe(
      (param) => {
        this.claseService.getClase(param.get('id')).subscribe(
          (data: any) => {
            this.clase = data;
            this.asignacionAlumno.fechaAsignacion = fechaAsignacion;
            this.asignacionAlumno.claseId = this.clase.claseId;
            this.asignacionAlumno.carne = this.usuario.carne ? this.usuario.carne : '';
          }
        )
      }
    )

  }

  saveAsignacion () {
    this.asignacionService.saveAsignacion(this.asignacionAlumno).subscribe(
      (data: any) =>{
        Swal.fire({
          icon: 'success', 
          title: 'Asignación',
          text: `Asignación Confirmada. La asiganción se a realizado de forma exitosa !`,
          footer: 'Kalum v1.0.0'})
          .then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/asignaciones']);
            }
          })
      }, (error: any) =>{
        Swal.fire({
          icon: 'error', 
          title: 'Asignación',
          text: `Asignación Fallida !`,
          footer: 'Kalum v1.0.0'});
      }
    )
  }

}
