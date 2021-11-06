import { Component, OnDestroy, OnInit } from '@angular/core';
import { Clase } from './clase';
import { ClasesService } from './clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'Primeros pasos Angular';
  message = 'Usted es menor de edad';
  clases: Clase[] = [];
  image: string;

  constructor(
    private clasesService: ClasesService
  ) {
  
    const apiKey = 'knLLiT3CsBLtCDWlJr0JUhrxfGdupiB3';
    const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    peticion
      .then(res => res.json())
      .then(({data}) => {
        const { url } = data.images.original;
        this.image = url;
      })
      .catch(console.warn)
   }

  ngOnInit(): void {
    this.clasesService.getClases().subscribe(
      data => {
        this.clases = data
        console.log(this.clases.length);
      },
      error => console.log(error) 
    );
  }

  ngOnDestroy() {

  }
}
