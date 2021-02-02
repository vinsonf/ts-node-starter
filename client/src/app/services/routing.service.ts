import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/operators";
import {SocketService} from "./socket.service";
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private dataSubject = new BehaviorSubject({})

  public data$: Observable<any> = this.dataSubject.asObservable();
  public data: any = {};

  constructor(
    private socketService: SocketService,
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.socketService.setupConnection();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
    ).subscribe((event: RouterEvent) => this.setData(event));

  }

  private setData(event: any) {
    this.dataSubject.next(event);
    this.data = event;
  }



  goToNewEntity(): void {
    console.log(this.data.title)
    switch(this.data.title) {
      case 'Users':
        this.router.navigate(['navigate', 'user-create']);
        break;
      case 'PROPERTIES':
        this.router.navigate(['navigate', 'property-create']);
        break;
      default:
        console.log('no new route')
    }
  }
}
