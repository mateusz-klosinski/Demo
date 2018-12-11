import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-preview-list',
  templateUrl: './product-preview-list.component.html',
  styleUrls: ['./product-preview-list.component.scss']
})
export class ProductPreviewListComponent implements OnInit {

  @Input() title: string;

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
