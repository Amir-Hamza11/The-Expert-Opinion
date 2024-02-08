import { Component, OnInit } from '@angular/core';

declare var AOS: any; // Declare AOS variable

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

  // Method to scroll to the contact section
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
