import { Component, OnInit } from '@angular/core';
import { BusService } from '../services/bus.service';
import { SocketIoService } from '../services/socket-io.service';
@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css'],
})
export class BusesComponent implements OnInit {
  private socket: any;

  constructor(
    public busService: BusService,
    private webSocketService: SocketIoService
  ) {}
  busData: Array<any> = [];
  ngOnInit(): void {
    this.busService.getBus().subscribe((res) => {
      this.busData = res;
      console.log(res);
    });

    this.webSocketService.listen('sendData').subscribe((data: any) => {
      this.busData = data;
    });
  }
}
