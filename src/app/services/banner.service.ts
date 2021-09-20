import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductsNewResponseModel } from '@interfaces/products.interface';
import { ErrorHandlerServiceService } from '../services/error-handler-service.service'

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient,
    private errorHandlerService : ErrorHandlerServiceService
  ) { }

  private servicesPath 	= `${environment.api}/products`;
	productsNewResponse		= new Observable<ProductsNewResponseModel>()
  
  /**
	* @author Matias Villar
	* @Description 
	* @date  19-09-2021
	* @params 
	* @GET
	* @return ClientesTiendaListResponseModel
	*/
  productsNew() : Observable<ProductsNewResponseModel>{
    this.productsNewResponse = this.http.get<ProductsNewResponseModel>(`${this.servicesPath}/new`).pipe(
			catchError(this.errorHandlerService.errorHandler)
		)
    return this.productsNewResponse
  }
}
