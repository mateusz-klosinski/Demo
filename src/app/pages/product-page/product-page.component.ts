import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/product/shared/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product = {
    code: 'PRODUCT_CODE',
    availableColors: ['RED', 'GREEN', 'BLUE'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    details: {
      climate: ['Indoor', 'Warm'],
      material: [ 'Hemp', 'Organic', 'Cotton', 'Spandex'],
      styleGeneral: 'Tee',
      pattern: 'Solid',
    },
    imageUrls: [],
    name: 'Radiant Tee',
    price: 27.06,
  }

  reviews: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
