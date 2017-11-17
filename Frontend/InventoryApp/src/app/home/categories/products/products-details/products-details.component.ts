import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { ICategory } from '../../../../core/models/ICategory.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../../core/redux/store';
import { FormControl, Validators } from '@angular/forms';
import { IWaybillItem } from '../../../../core/models/IWaybillItem.model';
import { ReduxActions } from '../../../../core/redux/ReduxActions';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProduct = {
    _id: '',
    name: '',
    count: 0,
    lastUpdate: null,
    imgPath: '',
    description: ''
  };
  category: ICategory = {
    _id: '',
    name: '',
    products: []
  };

  amountControl: FormControl;
  editMode = false;
  sign = 1;

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    // redux state subscription
    this.ngRedux.subscribe(() => {
      this._loadProduct(this.route.snapshot.params);
    });
    // route subscription
    this.route.params.subscribe(
      (params: Params) => {
        this._loadProduct(params);
      }
    );
    this.amountControl = new FormControl('', [Validators.required, Validators.min(1)]);
  }

  private _loadProduct(params: Params) {
    const state: IAppState = this.ngRedux.getState();
    if (state.categories.length !== 0) {
      this.category = state.categories.find(c => c._id === params['categoryId']);
      this.product = this.category.products.find(p => p._id === params['productId']);
    }
  }

  submit() {
    let waybillItem: IWaybillItem = {
      categoryId: this.category._id,
      productId: this.product._id,
      productName: this.product.name,
      count: +this.amountControl.value * this.sign
    };

    this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_ADD_ITEM, item: waybillItem });
    this.reset();
  }

  reset() {
    this.editMode = false;
    this.amountControl.reset();
  }
}
