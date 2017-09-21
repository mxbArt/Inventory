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
  private readonly serverUrl: string = 'http://app-stocktaking.a3c1.starter-us-west-1.openshiftapps.com/';

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
        // console output
        console.log(response.json());

        const categories: ICategory[] = response.json();
        return categories;
      }
      );
  }

  createCategory(category: ICategory) {
    const body = JSON.stringify(category);
    return this.http.post(this.serverUrl + 'categories', body, this.options)
      .map(
      (response: Response) => {
        return response.json();
      });
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(this.serverUrl + `categories/${categoryId}`, this.options);
  }
}
