import { Component, OnInit } from '@angular/core';

declare var AOS: any; // Declare AOS variable

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}
