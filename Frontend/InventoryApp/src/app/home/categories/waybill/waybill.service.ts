import { Injectable } from '@angular/core';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';

@Injectable()
export class WaybillService {

  private _waybills: IWaybillItem[] = [
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2ce',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2cf',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2d1',
      productName: 'Ананас',
      count: 10
    },
  ];

  get waybills(): IWaybillItem[] {
    return this._waybills;
  }

  waybilsChange: BehaviorSubject<IWaybillItem[]> = new BehaviorSubject<IWaybillItem[]>([]);

  constructor() {}

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

  // TODO
  submit() {
    console.log('submitted!!');
    this.clearWaybills();
  }
}
