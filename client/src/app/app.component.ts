import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";
import {CLIENT_MESSAGES} from "../../../shared/dist";
import {ApiService} from "./services/api.service";
import {ApiPostAuthLogin} from "./services/endpoints/auth.requests";
import {RoutingService} from "./services/routing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    private socketService: SocketService,
    private apiService: ApiService,
    private routingService: RoutingService,
  ) {
    this.socketService.setupConnection();

  }

  public login() {
    this.apiService.request(
      new ApiPostAuthLogin({email: 'what', password: 'yes'})
    ).subscribe((response) => console.log(response))
  }

}
