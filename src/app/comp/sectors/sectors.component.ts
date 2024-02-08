import { Component, OnInit } from '@angular/core';

declare var AOS: any; // Declare AOS variable

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
}
