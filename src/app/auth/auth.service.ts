import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
   
    constructor(private http: HttpClient){}
    
    public isAuthenticated() {
        //IT IS A VERY SIMPLIST APPROACH. I COULD USE JWT AND EXPIRATION TOKEN;

        const token = localStorage.getItem('token');
        
        if(token) {
            return true 
        } else {
            return false;
        }
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      
      if(err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred ${err.error.message}`;
      } else {
          errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
      }

      console.log(errorMessage);
      return throwError(errorMessage);

    }
}