import {Injectable, isDevMode} from '@angular/core';
import {io} from 'socket.io-client/build/index';
import {Observable} from "rxjs";
import {SERVER_MESSAGES} from "../../../../shared/dist";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  readonly uri: string = 'ws://localhost:3000'
  constructor(
  ) {}
  // PURE: helpers
  createIO() {
    return isDevMode() ? io(this.uri) : io();
  }

  listen(eventName: string) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    })
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  // SIDE: actions
  setupConnection() {
    this.socket = this.createIO();
    this.listen(SERVER_MESSAGES.CONNECT).subscribe((data: any) => {
      console.log(
        SERVER_MESSAGES.NAME,
        SERVER_MESSAGES.CONNECT,
        data,
      );
    });
    this.listen(SERVER_MESSAGES.DISCONNECT).subscribe((data) => {
      console.log(
        SERVER_MESSAGES.NAME,
        SERVER_MESSAGES.DISCONNECT,
        data,
      );
    });
  }
}
