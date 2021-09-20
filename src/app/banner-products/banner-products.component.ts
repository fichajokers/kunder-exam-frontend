import { Component, OnInit } from '@angular/core';
import { Product } from '@interfaces/products.interface';
import { BannerService } from '@services/banner.service';

@Component({
	selector: 'app-banner-products',
	templateUrl: './banner-products.component.html',
	styleUrls: ['./banner-products.component.scss']
})
export class BannerProductsComponent implements OnInit {
	
	productBanner 	: Product | undefined
	showPlan		: boolean = false
	showCellphone	: boolean = false

	constructor(
		private _bannerService : BannerService
	) {}
		
	ngOnInit(): void {
		this.productsNew()
	}
	
	/**
	 * get new products to show in banner
	 */
	productsNew(){
		this._bannerService.productsNew().subscribe(
			(data) =>{
				this.productBanner = data.product;
				//first check if product show attribute is true
				if( this.productBanner.show ){
					//check product type
					if( this.productBanner.type == 'plan' ){
						//Show plan and hide CellPhone
						this.showPlan 		= true
						this.showCellphone 	= false
					}else if( this.productBanner.type == 'cellphone' ){
						//Show CellPhone and hide Plan
						this.showCellphone 	= true
						this.showPlan 		= false
					}
				}
			},(error) =>{
				console.log(error)
			}
		)
	}

	/**
	 * Redirect link from API
	 * @param link 
	 */
	goLink(link : string | undefined){
		window.open(link,'_blank')
	}
}
