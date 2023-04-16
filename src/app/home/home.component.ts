import Typewriter from 't-writer.js';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }
  

  ngOnInit() {
  

    const buyButton = document.getElementById('buy-button') as HTMLElement;
    const popup = document.querySelector('.popup') as HTMLElement | null;
    const closeBtn = document.querySelector('.close') as HTMLElement | null;
    
    if (buyButton) {
      buyButton.addEventListener('click', function() {
        if (popup) {
          popup.style.display = 'block';
        }
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        if (popup) {
          popup.style.display = 'none';
        }
      });
    }
    








    // ================= My Type Write Animation = ======== ==    ===========



    const target = document.getElementById('welcome-note1');
    const secTarget = document.getElementById('welcome-note2');
    const options = {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 140,
      typeColor: 'white',
      cursorColor: 'red',
      typeClass: 'fw-Mukta',
    };

    const secondOptions = {
      loop: true,
      typeSpeed: 230,
      deleteSpeed: 250,
      typeColor: '#ccc',
      cursorColor: 'black',
      typeClass: 'fw-Mukta',
    };

    const writer = new Typewriter(target, options);
    writer
      .type('Welcome To Tshindolo FunFair Park ')
      .rest(7000)
      .removeCursor()
      .start();

      const myWelcomeNote2 = new Typewriter(secTarget, secondOptions);
      myWelcomeNote2
      .type('Get Ticket Now !')
      .rest(10000)
      .removeCursor()
      .start();


  }

}
