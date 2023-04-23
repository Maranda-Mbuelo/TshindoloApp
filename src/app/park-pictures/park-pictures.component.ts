import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-park-pictures',
  templateUrl: './park-pictures.component.html',
  styleUrls: ['./park-pictures.component.css']
})
export class ParkPicturesComponent implements OnInit {
  @Input() pictures!: string[];

  selectedPicture = '';
  showNavigation = false;
  currentIndex = 0;
  

  constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.loadPictures();
  // }

  ngOnInit() {
    this.http.get<any>('assets/park-pictures.json').subscribe(data => {
      this.pictures = data;
      console.log(this.pictures);
    });
  }
  

  loadPictures() {
    this.http.get('assets/images/', { responseType: 'text' })
      .subscribe(response => {
        const parser = new DOMParser();
        const html = parser.parseFromString(response, 'text/html');
        const images = Array.from(html.querySelectorAll('img'));
        this.pictures = images.map(img => img.getAttribute('src')?.split('/')?.pop() || '');
        this.selectedPicture = this.pictures[0];
        this.showNavigation = this.pictures.length > 1;
      });
  }

  openPicture(picture: string) {
    this.selectedPicture = picture;
    this.showNavigation = true;
    this.currentIndex = this.pictures.indexOf(picture);
  }

  previousPicture() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.pictures.length - 1;
    }
    this.selectedPicture = this.pictures[this.currentIndex];
  }

  nextPicture() {
    this.currentIndex++;
    if (this.currentIndex >= this.pictures.length) {
      this.currentIndex = 0;
    }
    this.selectedPicture = this.pictures[this.currentIndex];
  }
}
