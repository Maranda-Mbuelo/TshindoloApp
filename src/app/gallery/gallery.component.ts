import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PicturesserviceService } from './picturesservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  currentIndex: number = 0;
  initialImage: string = '/assets/images/Tshindolo_61.jpg';
  selectedImageIndex: number = 0;
  myPictures: string[] = [];

  constructor(private http: HttpClient, private picturesService: PicturesserviceService) {}

  ngOnInit() {
    this.myPictures = this.picturesService.getAllPictures();
    console.log(this.myPictures);
  }

  nextButton() {
    if (this.currentIndex < this.myPictures.length - 1) {
      this.currentIndex++;
    } else {
      // Wrap around to the first image
      this.currentIndex = 0;
    }

    this.updateBigImage();
  }

  previousButton() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Wrap around to the last image
      this.currentIndex = this.myPictures.length - 1;
    }

    this.updateBigImage();
  }

  updateBigImage() {
    this.initialImage = this.myPictures[this.currentIndex];
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.initialImage = this.myPictures[index];
  }

}
