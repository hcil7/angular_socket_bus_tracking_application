import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  socket: any;
  url: string = 'http://localhost:4000';
  constructor() {
    this.socket = io(this.url);
  }

  listen(event: string) {
    return new Observable((subscriber) => {
      this.socket.on(event, (data: string) => {
        subscriber.next(data);
      });
    });
  }
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
}
