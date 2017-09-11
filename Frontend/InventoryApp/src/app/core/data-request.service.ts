import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, RequestMethod } from '@angular/http';
// rxjs
import { Observable } from 'rxjs/Observable';
// Models
import { ICategory } from './models/ICategory.model';
import { IProduct } from './models/IProduct.model';

@Injectable()
export class DataRequestService {
  private readonly options: RequestOptions;
  private readonly serverUrl: string = 'http://inventory-busy.a3c1.starter-us-west-1.openshiftapps.com/';

  constructor(private http: Http) {
    const headers: Headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
    this.options = new RequestOptions(
      {
        headers: headers
      }
    );
  }

  getCategoryList(): Observable<ICategory[]> {
    return this.http.get(this.serverUrl + 'categories', this.options)
      .map(
      (response: Response) => {
        console.log(response.json())
        let categories: ICategory[] = [];
        response.json().forEach(item => {
          let products: IProduct[] = [];

          item.products.forEach(p => {
            products.push({
              id: p._id,
              name: p.name,
              imgPath: p.imgPath,
              count: p.count
            });
          });

          categories.push({
            id: item._id,
            name: item.name,
            imgPath: item.imgPath,
            products: products
          });
        });

        //const categoryList: ICategory[] = response.json();
        return categories;
      }
      );
  }

  createCategory(category: ICategory) {
    const body = JSON.stringify(category);
    // const requestoptions = new RequestOptions({
    //   method: RequestMethod.Post,
    //   url: this.serverUrl + 'categories',
    //   headers: new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }),
    //   body: JSON.stringify(category)
    // });
    console.log(body);
    return this.http.post(this.serverUrl + 'categories', this.options)
      .map(
      (response: Response) => {
        console.log(response.json());
      }
    );
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(this.serverUrl + `categories/${categoryId}`, this.options)
      .map(
      (response: Response) => {
        console.log(response.json());
      }
      );
  }
}
