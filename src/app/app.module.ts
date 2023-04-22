import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Add this line

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './advantages/offers/offers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LocationComponent } from './location/location.component';
import { TshindoloRatingComponent } from './tshindolo-rating/tshindolo-rating.component';
import { ParkPicturesComponent } from './park-pictures/park-pictures.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvantagesComponent,
    AboutComponent,
    OffersComponent,
    ContactsComponent,
    LocationComponent,
    TshindoloRatingComponent,
    ParkPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    // })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
