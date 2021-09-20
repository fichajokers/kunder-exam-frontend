import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';
import { BannerProductsComponent } from 'app/banner-products/banner-products.component'


@NgModule({
  imports: [
    HomePageRoutingModule
  ],
  declarations: [HomePageComponent,BannerProductsComponent],
  providers: []
})
export class HomePageModule { }
