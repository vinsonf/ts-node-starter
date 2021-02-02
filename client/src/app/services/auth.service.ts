import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ApiPostAuthLogin} from "./endpoints/auth.requests";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private store: Store<any>,
    private router: Router,
  ) {}

  public login(credentials: any): Observable<any> {
    return this.apiService.request(
      new ApiPostAuthLogin(JSON.stringify(credentials))
    ).pipe(
      tap((data) => { console.log('this goes to store on login', data )} ),
      tap( () => {
        this.router.navigate(['navigate']).then()
      })
    )
  }

}
