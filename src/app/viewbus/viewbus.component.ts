import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-viewbus',
  templateUrl: './viewbus.component.html',
  styleUrls: ['./viewbus.component.css'],
})
export class ViewbusComponent implements OnInit {
  constructor(private busService: BusService, private route: ActivatedRoute) {}
  busData: Array<any> = [];
  busIndex: any;
  ngOnInit(): void {
    console.log('hello');
    this.busIndex = this.route.snapshot.paramMap.get('busindex');
    this.busService.getBus().subscribe((res) => {
      this.busData = res;
    });
  }
}
