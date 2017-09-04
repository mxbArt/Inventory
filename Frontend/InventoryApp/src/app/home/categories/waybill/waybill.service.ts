import { Injectable } from '@angular/core';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';

@Injectable()
export class WaybillService {

  private _waybills: IWaybillItem[] = [
    {
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
      productName: 'Банан',
      count: -10
    },
    {
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
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

  addItem(item: IWaybillItem) {
    this._waybills.push(item);
    this.waybilsChange.next(this.waybills);
  }
}
