import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../shared/review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {

  @Input() reviews: Review[];

  constructor() { }

  ngOnInit() {
  }

}
