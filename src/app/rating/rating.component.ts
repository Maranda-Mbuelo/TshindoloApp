import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})



export class RatingComponent {
  // rating: number = 0;
  // review: string = '';

  // setRating(value: number) {
  //   this.rating = value;
  // }

  // submitReview() {
  //   // Add your code here to submit the review to your backend or perform some other action
  // }


  rating: number = 0;
  review: string = '';

  constructor(private http: HttpClient) { }

  setRating(value: number) {
    this.rating = value;
  }

  submitReview() {
    const reviewData = {
      review: this.review,
      email: 'marandambuelo3@gmail.com'
    };
    this.http.post('https://example.com/api/send-review-email', reviewData).subscribe(response => {
      console.log('Email sent successfully');
    }, error => {
      console.error('Failed to send email:', error);
    });
  }



}
