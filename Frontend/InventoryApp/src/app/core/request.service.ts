import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, RequestMethod } from '@angular/http';
// rxjs
import { Observable } from 'rxjs/Observable';
// Models
import { ICategory } from './models/ICategory.model';
import { IProduct } from './models/IProduct.model';
import { IUpdatedItems } from './models/IUpdatedItems.model';
// Redux
import { IAppState } from './redux/store';
import { NgRedux } from 'ng2-redux';
import { ReduxActions } from './redux/ReduxActions';

@Injectable()
export class RequestService {
  private readonly options: RequestOptions;
  private readonly serverUrl: string = 'http://localhost:56140/api/';
  // 'http://app-stocktaking.a3c1.starter-us-west-1.openshiftapps.com/';

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>) {
    // headers
    const headers: Headers = new Headers(
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });
    // request options
    this.options = new RequestOptions(
      {
        headers: headers
      }
    );
  }

  loadData() {
    return {
      categories: this._loadCategories(),
      products: this._loadProducts()
    };
  }

  private _loadCategories(): Observable<any> {
    return this.http.get(this.serverUrl + 'categories?includeProducts=true', this.options);
  }
  private _loadProducts(): Observable<any> {
    return this.http.get(this.serverUrl + 'products', this.options);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get(this.serverUrl + `categories/${id}`, this.options);
  }
  getProduct(id: string): Observable<any> {
    return this.http.get(this.serverUrl + `products/${id}`, this.options);
  }

  processWaybill(): void {
    this.http.put(this.serverUrl + 'products', this.ngRedux.getState().waybill, this.options)
      .subscribe((response: Response) => {
        this.loadData();
        this.ngRedux.dispatch({
          type: ReduxActions.WAYBILL_SUBMITED
        });
      });
  }

  updateModels(updatedItems: IUpdatedItems): Observable<any> {
    return this.http.put(this.serverUrl + 'management/entities', updatedItems, this.options);
  }

  // getCategoryList(): Observable<ICategory[]> {
  //   return this.http.get(this.serverUrl + 'categories', this.options)
  //     .map(
  //     (response: Response) => {
  //       // console output
  //       console.log(response.json());

  //       const categories: ICategory[] = response.json();
  //       return categories;
  //     }
  //     );
  // }

  // createCategory(category: ICategory) {
  //   const body = JSON.stringify(category);
  //   return this.http.post(this.serverUrl + 'categories', body, this.options)
  //     .map(
  //     (response: Response) => {
  //       return response.json();
  //     });
  // }

  // deleteCategory(categoryId: string) {
  //   return this.http.delete(this.serverUrl + `categories/${categoryId}`, this.options);
  // }
}
