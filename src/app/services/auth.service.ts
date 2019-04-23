import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';

import { Http ,HttpModule, Headers,RequestOptions, JsonpModule } from '@angular/http';
import {NgModule} from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { Platform } from '@ionic/angular';
//import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';


const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [ BrowserModule, HttpModule ]

})



export class AuthService {


authenticationState = new BehaviorSubject(false);


constructor(private http: HttpClient) { }
//constructor(private AFauth : AngularFireAuth, private http: HttpClient) { }

//constructor(private storage: Storage, private plt: Platform) { 
 //   this.plt.ready().then(() => {
 //     this.checkToken();
 //   });
 // }



//constructor(private http: HttpClient) { }

//console.log('algo');

 apiUrl ="http://localhost/general/";

// login (data): Observable<any> {
 //   return this.http.post(this.apiUrl + 'signin', data)
  //    .pipe(
  //      tap(_ => console.log('login')),
  //      catchError(this.handleError('login', []))
  //    );
 // }


 private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


      // login(email:string , password:string) {

       

      //  const url ="http://localhost";
        //const  params = JSON.stringify(new  HttpParams().set('Login', "testuser").set('Password', "test").set('Mobile', "true"));
      //  const  params = JSON.stringify(new  HttpParams());
      //  const httpOptions = {
      //    headers: new HttpHeaders({
      //    'Accept': 'application/json',
      //    })
      //  };

      // this.HttpHeaders.post(url,params,httpOptions).subscribe((response) => {
      //    console.log(response);
      // }, error => {
      //    console.log(error);
      // });



      //}




 checkToken() {
    //this.storage.get(TOKEN_KEY).then(res => {
    //  if (res) {
    //    this.authenticationState.next(true);
    //  }
   // })
  }
 
  login() {
   // return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
    //  this.authenticationState.next(true);
    //});
  }
 
  logout() {
   // return this.storage.remove(TOKEN_KEY).then(() => {
   //   this.authenticationState.next(false);
  //  });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }



}
