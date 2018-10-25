import { Injectable } from "@angular/core";
import { Dragon } from './dragon';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import dragonRouter from './dragonroutes.js';

@Injectable({
    providedIn: 'root'
})

export class DragonService {
    private routes = dragonRouter;

    constructor(private http: HttpClient){}

    getDragons(page: number): Observable<any> {
        let pageBuilder = '';

        if(page) {
            pageBuilder += '?page=' + page;
        }
        
        const url = this.routes.get.index + pageBuilder;

        return this.http.get<any>(url).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    } 
    
    getDragon(slug: string): Observable<any> {
        console.log('Slug is' + slug);
        let route = this.routes.get.show.replace(':slug', slug);
        
        return this.http.get<any>(route).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    postDragon(request: any): Observable<any> {
        let route = this.routes.post.create;
        
        return this.http.post(route, request, { headers:{'Content-Type': 'application/json'}}).pipe(
            catchError(this.handleError)
        )
    }

    updateDragon(request: any, slug: string): Observable<any> {
        let route = this.routes.put.replace(':slug', slug);
        
        return this.http.put(route, request, { headers:{'Content-Type': 'application/json'}}).pipe(
            catchError(this.handleError)
        )
    }

    deleteDragon(slug: string): Observable<any> {
        
        if(slug == '' || slug == null) {
            alert('Slug is null, cannot delete');
            throwError('Slug is null');
            return;
        }

        let route = this.routes.delete.replace(':slug',slug);
        
        return this.http.delete(route).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        )
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