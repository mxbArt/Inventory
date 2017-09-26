import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { IProduct } from '../../../core/models/IProduct.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  currentCategoryId: string;
  products: IProduct[];

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {  }

  ngOnInit() {
    // redux state subscription
    this.ngRedux.subscribe(() => {
      this._loadProducts();
    });

    // route params subscription
    this.route.params.subscribe(
      (params: Params) => {
        this.currentCategoryId = params['categoryId'];
        this._loadProducts();
      }
    );
  }

  // gets products from redux state
  private _loadProducts() {
      const state: IAppState = this.ngRedux.getState();
      if (state.categories.length !== 0) {
        this.products = this.ngRedux.getState().categories.find(c => c._id === this.currentCategoryId).products;
      }
  }
}
