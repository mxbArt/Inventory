import { OnInit, Injectable } from '@angular/core';
// Models
import { ICategory } from './models/ICategory.model';
import { IWaybillItem } from './models/IWaybillItem.model';
import { IProduct } from './models/IProduct.model';
// Services
import { DataRequestService } from './data-request.service';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ILogItem } from './models/ILogItem';
// fake data
import fakeLogs from '../fake-data/fake-logs-data';
import fakeCategories from '../fake-data/fake-data';
import { ProductsActions } from './enums/product-actions.enum';

@Injectable()
export class StorageService implements OnInit {
  private _categories: ICategory[] = [];
  private _categoryNames: string[]  = [];
  private _logs: ILogItem[] = [];

  get categories(): ICategory[] {
    return this._categories;
  }

  get categoryNames(): string[] {
    return this._categoryNames;
  }

  get logs(): ILogItem[] {
    this._setFieldsToLogItems();
    return this._logs;
  }

  // Events
  categoryChanged: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  productsChanged: Subject<IProduct[]> = new Subject<IProduct[]>();
  logsChanged: BehaviorSubject<ILogItem[]> = new BehaviorSubject<ILogItem[]>([]);

  constructor(private dataRequestService: DataRequestService) {
    //DataRequest Service subscriptions
    this.dataRequestService.getCategoryList().subscribe(
      (categoryList) => {
        this._categories = categoryList.sort((c1, c2) => c1.name.localeCompare(c2.name));
        this._createCategoryNamesList();
        this.categoryChanged.next(this.categories);
        this.productsChanged.next();

        // temp
        this._logs = fakeLogs;
        //this._setFieldsToLogItems();
        this.logsChanged.next(this.logs);
      }
    );

        // this._categories = fakeCategories.sort((c1, c2) => c1.name.localeCompare(c2.name));
        // this._createCategoryNamesList();
        // this.categoryChanged.next(this.categories);
        // this.productsChanged.next();

        // this._categories.forEach((c) => {
        //   for (let i = 0; i < c.products.length; i++) {
        //     c.products[i].id = i.toString();
        //   }
        // });


  }

  ngOnInit() {
  }

  private _createCategoryNamesList() {
    this._categoryNames = [];
    this.categories.forEach(i => {
      this._categoryNames.push(i.name);
    });
  }

  private _setFieldsToLogItems() {
    for (let i = 0; i < this._logs.length; i++) {
      let item = this._logs[i];
      item.productName = this.getProducts(item.categoryId).find(p => p.id == item.productId).name;
    }
  }

  // TODO: request to the backend
  addCategory(category: ICategory) {
    category.id = Math.random().toString();
    this._categories.push(category);
    this._categories.sort((c1, c2) => c1.name.localeCompare(c2.name));

    this._createCategoryNamesList();
    this.categoryChanged.next(this.categories);
  }

  getCategory(id: string): ICategory {
    return this._categories.find(c => c.id === id);
  }

  getProducts(categoryId: string): IProduct[] {
    if (this._categories.length !== 0) {
      return this.getCategory(categoryId).products;
    } else {
      return [];
    }
  }

  // TODO: request to the backend
  processWaybill(waybillItems: IWaybillItem[]) {
    waybillItems.forEach(item => {
      this._categories.find(c => c.id === item.categoryId)
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
    this._categories.find(c => c.id === categoryId).products.push(product);
    this.productsChanged.next();
  }
}
