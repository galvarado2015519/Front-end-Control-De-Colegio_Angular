import { Component, OnInit } from '@angular/core';
import { Carreras } from './carreras';
import { CarrerasService } from './carreras.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss']
})
export class CarrerasComponent implements OnInit {

  carreraTecnica: Carreras;
  carrerasTecnicas: Carreras[] = [];

  constructor(
    private carreraServicio: CarrerasService
  ) { }

  ngOnInit(): void {
    this.carreraServicio.getCarreras().subscribe((data: any) => {
        this.carrerasTecnicas = data;
      }
    );
  }

}
