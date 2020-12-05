import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import {SocketService} from "./services/socket.service";


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
  }

}
