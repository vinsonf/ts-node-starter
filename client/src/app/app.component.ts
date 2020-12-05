import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";
import {CLIENT_MESSAGES} from "../../../shared/dist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    private socketService: SocketService,
  ) {
    this.socketService.setupConnection();
    console.log(CLIENT_MESSAGES);
  }

}
