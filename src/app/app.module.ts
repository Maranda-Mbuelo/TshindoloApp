import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
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
    ParkPicturesComponent,
    GalleryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
