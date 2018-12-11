import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductSummaryComponent } from './product/product-summary/product-summary.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewFormComponent } from './review/review-form/review-form.component';
import { ProductPreviewComponent } from './product/product-preview/product-preview.component';
import { ProductPreviewListComponent } from './product/product-preview-list/product-preview-list.component';
import { BannerComponent } from './banner/banner.component';
import { ProductCarouselComponent } from './product/product-carousel/product-carousel.component';

@NgModule({
  declarations: [
    TopbarComponent, 
    FooterComponent, 
    ProductSummaryComponent, 
    ProductDetailsComponent, 
    ReviewComponent, 
    ReviewListComponent, 
    ReviewFormComponent, 
    ProductPreviewComponent, 
    ProductPreviewListComponent, 
    BannerComponent, ProductCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent, 
    FooterComponent,
    ProductSummaryComponent, 
    ProductDetailsComponent, 
    ReviewComponent, 
    ReviewListComponent, 
    ReviewFormComponent, 
    ProductPreviewComponent,
    ProductPreviewListComponent,
    BannerComponent
  ]
})
export class CoreModule { }
