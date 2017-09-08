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

@Injectable()
export class StorageService implements OnInit {
  private _categories: ICategory[] = [];
  private _categoryNames: string[]  = [];

  get categories(): ICategory[] {
    return this._categories;
  }

  get categoryNames(): string[] {
    return this._categoryNames;
  }

  // Events
  categoryChanged: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  productsChanged: Subject<IProduct[]> = new Subject<IProduct[]>();

  constructor(private dataRequestService: DataRequestService) {
    // DataRequest Service subscriptions
    this.dataRequestService.getCategoryList().subscribe(
      (categoryList) => {
        this._categories = categoryList.sort((c1, c2) => c1.name.localeCompare(c2.name));
        this._createCategoryNamesList();
        this.categoryChanged.next(this.categories);
      }
    );
  }

  ngOnInit() {
  }

  private _createCategoryNamesList() {
    this._categoryNames = [];
    this.categories.forEach(i => {
      this._categoryNames.push(i.name);
    });
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
    return this.getCategory(categoryId).products;
  }

  // TODO: request to the backend
  processWaybill(waybillItems: IWaybillItem[]) {
    waybillItems.forEach(item => {
      this._categories.find(c => c.id === item.categoryId)
        .products.find(p => p.name === item.productName).count += item.count;
    });
  }

  // TODO: request to the backend
  addProductToCategory(product: IProduct, categoryId: string) {
    this._categories.find(c => c.id === categoryId).products.push(product);
    this.productsChanged.next(this._categories.find(c => c.id === categoryId).products);
  }
}
