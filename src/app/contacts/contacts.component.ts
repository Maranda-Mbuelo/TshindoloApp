import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() {

  }

  @Input() pictures: string[] = [];

  ngOnInit(): void {
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
  }

}
