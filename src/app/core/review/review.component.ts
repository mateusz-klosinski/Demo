import { Component, OnInit, Input } from '@angular/core';
import { Review } from './shared/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit() {
  }

}
