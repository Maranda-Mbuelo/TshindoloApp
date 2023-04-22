import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TshindoloRatingComponent } from './tshindolo-rating/tshindolo-rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { ParkPicturesComponent } from './park-pictures/park-pictures.component';


const routes: Routes = [
  { path: '', redirectTo: 'TshindoloPark/home', pathMatch: 'full' }, 
  { path: 'TshindoloPark/home', component: HomeComponent }, 
  { path: 'TshindoloPark/about-us', component: AboutComponent }, 
  { path: 'TshindoloPark/contact-us', component: ContactsComponent }, 
  { path: 'TshindoloPark/rate-us', component: TshindoloRatingComponent },
  { path: 'TshindoloPark/location', component: LocationComponent },
  { path: 'TshindoloPark/pictures', component: ParkPicturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
