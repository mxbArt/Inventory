import { Injectable } from '@angular/core';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';
// Serivces
import { StorageService } from '../../../core/storage.service';

@Injectable()
export class WaybillService {

  private _waybills: IWaybillItem[] = [
    {
      categoryId: '59b01de5d3505500180f14bc',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '59b01de5d3505500180f14bc',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '59b01de5d3505500180f14bc',
      productName: 'Ананас',
      count: 10
    },
  ];

  get waybills(): IWaybillItem[] {
    return this._waybills;
  }

  waybilsChange: BehaviorSubject<IWaybillItem[]> = new BehaviorSubject<IWaybillItem[]>([]);

  constructor(private storageService: StorageService) {}

  removeItem(item: IWaybillItem) {
    this._waybills.splice(this._waybills.indexOf(item), 1);
    this.waybilsChange.next(this.waybills);
  }

  clearWaybills() {
    this._waybills = [];
    this.waybilsChange.next(this.waybills);
  }

  addItem(item: IWaybillItem) {
    this._waybills.push(item);
    this.waybilsChange.next(this.waybills);
  }

  submit() {
    this.storageService.processWaybill(this._waybills.slice());
    this.clearWaybills();
  }
}
