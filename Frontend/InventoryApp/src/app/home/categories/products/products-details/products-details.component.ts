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
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProduct = {
    id: '',
    name: '',
    count: 0,
    lastUpdate: null,
    imgPath: '',
    description: '',
    categoryId: ''
  };
  category: ICategory = {
    id: '',
    name: '',
  };

  amountControl: FormControl;
  formVisible = false;
  sign = 1;

  @select((s: IAppState) => s.appInEditMode) readonly editMode: Observable<boolean>;
  @select((s: IAppState) => s.categories) readonly categories: Observable<ICategory>;
  imgErrorPath = environment.imgNotFoundPath;

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
      this.category = state.categories.find(c => c.id === params['categoryId']);
      this.product = state.products.find(p => p.id === params['productId']);
    }
  }

  formSubmit() {
    let waybillItem: IWaybillItem = {
      categoryId: this.category.id,
      productId: this.product.id,
      productName: this.product.name,
      count: +this.amountControl.value * this.sign
    };

    this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_ADD_ITEM, item: waybillItem });
    this.formReset();
  }

  formReset() {
    this.formVisible = false;
    this.amountControl.reset();
  }

  handleImgError(event) {
    event.target.src = this.imgErrorPath;
  }

  onCategoryChange(event) {
    this.product.categoryId = event.target.value;
  }
}
