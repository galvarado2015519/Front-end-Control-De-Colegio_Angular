import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  title = 'Primeros pasos Angular';
  message = 'Usted es menor de edad';
  image: string;

  constructor() {
  
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
  }

}
