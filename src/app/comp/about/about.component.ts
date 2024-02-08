import { Component, OnInit } from '@angular/core';

declare var AOS: any; // Declare AOS variable

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

}
