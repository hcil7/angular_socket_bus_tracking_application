import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BusService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public getBus() {
    return this.base.getReq('/sefer');
  }
}
