import { Component, OnInit, ViewChild } from '@angular/core';
import { LinkswithinService } from '../services/linkswithin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private linksWithin: LinkswithinService) {

  }

  brand: string = 'Tshindolo Park';
  time: number = Date.now();

  myLinks: any = [];
  

  ngOnInit() {
    this.myLinks = this.linksWithin.myLinks;
  }


  getElement(){
    return document.querySelector<HTMLElement>('.brand');
  }

  dismiss(): void {
    window.location.href = "Home/Mbuelo/Maranda";
  }

}

