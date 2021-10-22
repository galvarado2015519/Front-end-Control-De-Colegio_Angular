import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  year: number;
  company: string;

  constructor() { 
    this.year = new Date().getFullYear();
    this.company = 'Kalum V1.0'
  }
  
  ngOnInit(): void {
  }

}
