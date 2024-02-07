import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './comp/nav/nav.component';
import { HomeComponent } from './comp/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './comp/about/about.component';
import { ServicesComponent } from './comp/services/services.component';
import { ResponsibilityComponent } from './comp/responsibility/responsibility.component';
import { SectorsComponent } from './comp/sectors/sectors.component';
import { ContactComponent } from './comp/contact/contact.component';
import { FooterComponent } from './comp/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ResponsibilityComponent,
    SectorsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
