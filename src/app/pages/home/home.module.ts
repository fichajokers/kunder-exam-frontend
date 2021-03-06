import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';
import { BannerProductsComponent } from '../../banner-products/banner-products.component'; 


@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule
  ],
  declarations: [HomePageComponent,BannerProductsComponent],
  providers: []
})
export class HomePageModule { }
