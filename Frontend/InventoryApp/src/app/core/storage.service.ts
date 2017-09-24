import { OnInit, Injectable } from '@angular/core';
// Models
import { ICategory } from './models/ICategory.model';
import { IWaybillItem } from './models/IWaybillItem.model';
import { IProduct } from './models/IProduct.model';
// Services
import { RequestService } from './request.service';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ILogItem } from './models/ILogItem';
// fake data
import fakeLogs from '../fake-data/fake-logs-data';
import { ProductsActions } from './enums/product-actions.enum';

@Injectable()
export class StorageService implements OnInit {
  private _categories: ICategory[] = [];
  private _logs: ILogItem[] = [];

  get categories(): ICategory[] {
    return this._categories;
  }

  get logs(): ILogItem[] {
    this._setFieldsToLogItems();
    return this._logs;
  }

  // Events
  logsChanged: BehaviorSubject<ILogItem[]> = new BehaviorSubject<ILogItem[]>([]);

  constructor(private dataRequestService: RequestService) {  }

  ngOnInit() {
  }

  // Sets data to the productName field in ILogItem model
  private _setFieldsToLogItems() {
    // for (let i = 0; i < this._logs.length; i++) {
    //   let item = this._logs[i];
    //   item.productName = this.getProducts(item.categoryId).find(p => p.id == item.productId).name;
    // }
  }

  // TODO: request to the backend
  addCategory(category: ICategory) {
    console.log(category);
    this.dataRequestService.createCategory(category).subscribe(
      (data) => {
        console.log(data);
        console.log('finished!!');
        console.log(category);
      }
    );
    // category.id = Math.random().toString();
    // this._categories.push(category);
    // this._categories.sort((c1, c2) => c1.name.localeCompare(c2.name));

    // this._createCategoryNamesList();
    // this.categoryChanged.next(this.categories);
  }

  // TODO: request to the backend
  processWaybill(waybillItems: IWaybillItem[]) {
    waybillItems.forEach(item => {
      this._categories.find(c => c._id === item.categoryId)
        .products.find(p => p.name === item.productName).count += item.count;

      fakeLogs.push({
        id: Math.random().toString(),
        date: new Date(),
        action: item.count > 0 ? ProductsActions.Add : ProductsActions.Remove,
        count: Math.abs(item.count),
        categoryId: item.categoryId,
        productId: item.productId
      });
    });
    this.logsChanged.next(this.logs);
  }

  // TODO: request to the backend
  addProductToCategory(product: IProduct, categoryId: string) {
    this._categories.find(c => c._id === categoryId).products.push(product);
    // this.productsChanged.next();
  }
}
