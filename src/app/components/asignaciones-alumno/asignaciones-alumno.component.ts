import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlumnosService } from '../alumnos/alumnos.service';
import { AsignacionesAlumno } from './asignaciones-alumno';
import { AsignacionesAlumnoService } from './asignaciones-alumno.service';

@Component({
  selector: 'app-asignaciones-alumno',
  templateUrl: './asignaciones-alumno.component.html'
})
export class AsignacionesAlumnoComponent implements OnInit {

  asignacionesAlumno: AsignacionesAlumno[] = [];

  constructor(
    private asignacionAlumnoService: AsignacionesAlumnoService,
    private alumnoService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alumnoService.getAsignacion().subscribe((data) =>{
      if (data) {
        this.asignacionesAlumno = data;
      }
    });
  }

  deleteAsignacion(asignacionId: string) :void{

    Swal.fire({
      title: '¿Estás Seguro de Eliminar Este Registro?',
      text: "No se puede revertir el cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.asignacionAlumnoService.deleteAsignacion(asignacionId).subscribe(
          () =>{
            Swal.fire({
              title: 'Registro Eliminado!',
              text: 'El registro se a eliminado exitosamente.',
              icon: 'success'
            }).then(() => {
              this.asignacionesAlumno = this.asignacionesAlumno.filter((value) => value.asignacionId != asignacionId); 
            });
          }, (message) => {
            alert(message.content.error);
          }
        );
      }
    });
  }
}
