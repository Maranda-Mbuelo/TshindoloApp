import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalLinksService {

  constructor() { }

  welcomeHeading: string = 'Tshindolo Park';

  myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  myLinks = [
    {
      name: 'About Us',
      path: 'TshindoloPark/about-us',
      class: 'material-symbols-outlined',
      attribute: 'chat_paste_go'
    },
    {
      name: 'Location',
      path: 'https://goo.gl/maps/xkp2dDerPZPksEdV6',
      class: 'material-symbols-outlined',
      attribute: 'location_on'
    },
    {
      name: 'Contact Us',
      path: 'TshindoloPark/contact-us',
      class: 'material-symbols-outlined',
      attribute: 'call'
    },
    {
      name: 'Rate Us',
      path: 'TshindoloPark/rate-us',
      class: 'material-symbols-outlined',
      attribute: 'thumb_up'
    }
  ]
}
