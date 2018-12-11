import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from '../shared/product-details.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() details: ProductDetails;

  constructor() { }

  ngOnInit() {
  }

}
