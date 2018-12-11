import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
