import { Component, OnInit } from '@angular/core';

declare var AOS: any; // Declare AOS variable

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.css']
})
export class ResponsibilityComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}

