import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})



export class RatingComponent {
  rating: number = 0;
  review: string = '';

  setRating(value: number) {
    this.rating = value;
  }

  submitReview() {
    // Add your code here to submit the review to your backend or perform some other action
  }
}
