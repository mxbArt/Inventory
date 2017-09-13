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
        this._fillFilelds();
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

  // Sets data to storage service properties
  private _fillFilelds() {
    this._categoryNames = [];
    this.categories.forEach(i => {
      this._categoryNames.push(i.name);
    });
  }

  // Sets data to the productName field in ILogItem model
  private _setFieldsToLogItems() {
    //for (let i = 0; i < this._logs.length; i++) {
    //  let item = this._logs[i];
    //  item.productName = this.getProducts(item.categoryId).find(p => p.id == item.productId).name;
    //}
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

  getCategory(id: string): ICategory {
    if (this._categories.length === 0) {
      return {
        id: id,
        name: '',
        products: [],
      };
    }
    return this._categories.find(c => c.id === id);
  }

  getProducts(categoryId: string): IProduct[] {
    if (this._categories.length !== 0) {
      const category = this.getCategory(categoryId);
      return category ? category.products : [];
    } else {
      return [];
    }
  }

  getProduct(categoryId: string, productId: string): IProduct {
    if (this._categories.length === 0) {
      return {
        id: productId,
        name: '',
        count: 0,
        imgPath: '',
        lastUpdate: new Date('Junuary 01, 2017'),
        description: ''
      };
    }
    return this._categories
      .find(c => c.id === categoryId).products
      .find(p => p.id === productId);
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
