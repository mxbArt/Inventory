import { Injectable } from '@angular/core';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';

@Injectable()
export class WaybillService {

  private _waybills: IWaybillItem[] = [
    {
      categoryName: 'Фрукты',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryName: 'Фрукты',
      productName: 'Банан',
      count: -10
    },
    {
      categoryName: 'Фрукты',
      productName: 'Яблоко',
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
}
