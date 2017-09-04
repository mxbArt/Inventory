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
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '52db8234-5fc3-4f91-b93a-a89e067a396a',
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
