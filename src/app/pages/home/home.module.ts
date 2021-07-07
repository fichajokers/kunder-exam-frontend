import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';


@NgModule({
  imports: [
    HomePageRoutingModule
  ],
  declarations: [HomePageComponent],
  providers: []
})
export class HomePageModule { }
