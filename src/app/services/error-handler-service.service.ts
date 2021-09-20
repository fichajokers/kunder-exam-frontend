
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerServiceService {

  constructor() { }

  errorHandler(error : any) {
    // console.log("error: ", error)
    let errorMessage = { codeResponse: 0, message: "", error: error };
    // return throwError(errorMessage);
    if (error.status === 0) {
      // alert("Problemas con el servidor contacte con el administrador")
      return throwError(errorMessage)
    }
    if (error.status === 401) {
      errorMessage.codeResponse = 401
      errorMessage.message = "No tiene permisos"
      return throwError(errorMessage)
    }
    if (error.error instanceof ErrorEvent) {
      errorMessage.error = error
      errorMessage.message = `Error: ${error.error.message}`;
      if (error.status === 401 || error.status === 403) {
        return throwError(errorMessage)
      }
    } else {
      errorMessage.error = error
      errorMessage.message = error
      errorMessage.message = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage)
  }
}
