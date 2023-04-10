import Typewriter from 't-writer.js';

import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit() {
    const target = document.getElementById('welcome-note1');
    const secTarget = document.getElementById('welcome-note2');
    const options = {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 140,
      typeColor: 'black',
      cursorColor: 'red',
      typeClass: 'fw-Mukta',
    };

    const secondOptions = {
      loop: true,
      typeSpeed: 230,
      deleteSpeed: 250,
      typeColor: 'black',
      cursorColor: 'black',
      typeClass: 'fw-Mukta',
    };

    const writer = new Typewriter(target, options);
    writer
      .type('Welcome To Tshindolo FunFair Park')
      .rest(1000)
      .removeCursor()
      .start();

      const myWelcomeNote2 = new Typewriter(secTarget, secondOptions);
      myWelcomeNote2
      .type('Get Ticket Now !')
      .rest(1000)
      .removeCursor()
      .start();
  }

}
