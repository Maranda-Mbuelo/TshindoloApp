import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

interface Slot {
  name: string;
  imagePath: string;
  content: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  slots: Slot[] = [
    {
      name: 'slot1',
      imagePath: '/assets/images/20230106_163917.jpg',
      content: ['Adults Swimming pools']
    },
    {
      name: 'slot2',
      imagePath: '/assets/images/Tshindolo_23.jpg',
      content: ['Mountaineering,', 'Hikings']
    },
    {
      name: 'slot3',
      imagePath: '/assets/images/20230106_163607.jpg',
      content: ['Kids Swimming pools']
    },
    {
      name: 'slot4',
      imagePath: '/assets/images/Tshindolo_17.jpg',
      content: ['Sports Activities']
    }
  ];

  constructor() {}

  ngOnInit(): void {
    const target = document.getElementById('define-paragraphs');
    const sourceCode = document.getElementById('source');
    const developer = 'Mbuelo';

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
      .type(`Tshindolo Park, founded by Mr. and Mrs. Maranda, is a popular entertainment destination in the Venda region, known for its unique customer service approach.<br>This park is renowned for introducing Quad Bike Riding shows for the first time in Venda.<br><br>During the summer, the park is lush with greenery, providing a breathtaking view to its visitors. Whether it's the exciting Quad Bike Riding shows or the tranquil surroundings, Tshindolo Park is a game-changer in the entertainment industry.<br><br>Developed by - ${developer}`)
      .rest(1000)
      .removeCursor()
      .start();
  }

}
