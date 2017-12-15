import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { ICategory } from '../../../../core/models/ICategory.model';
import { IWaybillItem } from '../../../../core/models/IWaybillItem.model';
// Services
import { RequestService } from '../../../../core/request.service';
import { NotificationService } from '../../../../core/notification.service';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../../core/redux/store';
import { ReduxActions } from '../../../../core/redux/ReduxActions';

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
  productCategory: string;

  amountControl: FormControl;
  formVisible = false;
  sign = 1;

  @select((s: IAppState) => s.appInEditMode) readonly editMode: Observable<boolean>;
  @select((s: IAppState) => s.categories) readonly categories: Observable<ICategory>;
  imgErrorPath = environment.imgNotFoundPath;

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>,
              private requestService: RequestService, private notificationService: NotificationService) { }

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
    if (state.products.length !== 0) {
      this.product = state.products.find(p => p.id === params['productId']);
      this.productCategory = state.categories.find(c => c.id === this.product.categoryId).name;
    }
  }

  formSubmit() {
    const waybillItem: IWaybillItem = {
      categoryId: this.product.categoryId,
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
    if (this.product.imgPath !== ''){
      this.notificationService.error(`Image for product ${this.product.name} could not load`);
    }
  }

  markModel() {
    if (this.product.edited !== true) {
      this.product.edited = true;
      // console.log(`product with id ${this.product.id} marked as edited`);
    }
  }

  discardChanges() {
    this.requestService.getProduct(this.product.id).subscribe(
      (data) => {
        this.ngRedux.dispatch({ type: ReduxActions.APP_DISCARD_PRODUCT, oldProduct: data.json()});
      }
    );
  }

  onCategoryChange(event) {
    this.product.categoryId = event.target.value;
    this.markModel();
  }
}
