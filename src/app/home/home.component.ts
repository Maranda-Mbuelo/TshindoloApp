import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TextwriterService } from '../services/textwriter.service';
import { LinkswithinService } from '../services/linkswithin.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  isOpen: boolean = false;
  myLinks: any = [];

  constructor(
    private textWriter: TextwriterService,
    private builder: FormBuilder,
    private linksWithin: LinkswithinService
  ) {}

  ngOnInit(): void {
    this.myLinks = this.linksWithin.myLinks;

    const textOptions = [
      {
        loop: false,
        typeSpeed: 120,
        deleteSpeed: 250,
        typeColor: '#ccc',
        cursorColor: 'transparent',
        typeClass: 'sans-serif',
        target: document.querySelector<HTMLElement>('.card1 h1'),
        text: 'Exciting Adventure!'
      },
      {
        loop: false,
        typeSpeed: 60,
        deleteSpeed: 250,
        typeColor: '#ccc',
        cursorColor: 'transparent',
        typeClass: 'sans-serif',
        target: document.getElementById('short-text'),
        text: 'Welcome to our exciting world of adventure and entertainment! Prepare to embark on a thrilling journey through our park, where every corner is filled with wonders waiting to be explored. Whether you\'re seeking heart-pumping rides, mesmerizing shows, or simply a place to unwind and have fun, we\'ve got you covered.'
      },
      {
        loop: false,
        typeSpeed: 100,
        deleteSpeed: 140,
        typeColor: '#ccc',
        cursorColor: 'transparent',
        typeClass: 'sans-serif',
        target: document.querySelector<HTMLElement>('.card1 p'),
        text: 'Tshindolo Entertaining Park'
      }
    ];
    
    textOptions.forEach((element, index) => {
      setTimeout(() => {
        if (element.target) {
          this.textWriter.writeText(element.target, element.text, element);
        }
      }, index * 4000);
    });
    
  //   textOptions.forEach((element) => {
  //     if (element.target) {
  //       this.textWriter.writeText(element.target, element.text, element);
  //     }
  //   });
   }

  getButton() {
    const menu = document.querySelector<HTMLElement>('.menu-btn');
    const blackPapper = document.querySelector<HTMLElement>('.blackPapper');
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      if (menu instanceof HTMLDivElement && blackPapper instanceof HTMLElement) {
        menu.style.width = '80%';
        blackPapper.style.width = '100%';
        blackPapper.style.height = '100%';
        this.headerComponent.brand = 'Menu';
        const name = this.headerComponent.getElement();
        if (name) {
          name.style.zIndex = '999!important';
          if (this.headerComponent.brand == 'Menu') {
            name.style.color = 'orange';
          } else {
            name.style.color = 'white';
          }
        }
      }
    } else {
      if (menu instanceof HTMLElement && blackPapper instanceof HTMLElement) {
        menu.style.width = '0%';
        blackPapper.style.width = '0%';
        blackPapper.style.height = '0%';
        blackPapper.style.top = '0';
        blackPapper.style.left = '0';
        if (menu.style.width == '0%') {
          this.headerComponent.brand = 'Tshindolo Park';
          const name = this.headerComponent.getElement();
          if (name) {
            if (this.headerComponent.brand == 'Menu') {
              name.style.color = 'white';
            } else {
              name.style.color = 'orange';
            }
          }
        }
      }
    }
  }
}
