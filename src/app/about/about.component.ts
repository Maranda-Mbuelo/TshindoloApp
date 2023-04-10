import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const target = document.getElementById('define-paragraphs');
    const sourceCode = document.getElementById('source');

    const options = {
      loop: false,
      typeSpeed: 40,
      deleteSpeed: 140,
      typeColor: 'black',
      cursorColor: 'aqua',
      typeClass: 'fw-Mukta',
    };

    const myOptions = {
      loop: true,
      strings: ['-a self taught developer', 'from mafukani'],
      typeSpeed: 100,
      deleteSpeed: 140,
      typeColor: 'black',
      cursorColor: 'black',
      typeClass: 'fw-Mukta',
    };

    let marvin: string[] = ['-a self taught developer', 'from mafukani'];

    const writer = new Typewriter(target, options);
    writer
      .type('We are game the Changers! <br> Tshindolo park is one of the most popular entertainment parks around Venda, Founded by Mr & Mrs Maranda.<br> So well Known of its unieque way of serving Customers. Tshindolo was first park to ever bring Quad bike Riding show in Venda. <br> Greenery mostly in Summer is what awaits you at Tshindolo, with nice and astonishing view. <br>...')
      .rest(1000)
      .removeCursor()
      .start();


      var mbuelo = new Typewriter(sourceCode, myOptions);
      mbuelo
        .type('developed by Double_M ')
        .rest(1000)
        .removeCursor()
        .start()
  }

}
