import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { ICategory } from '../../../../core/models/ICategory.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../../core/redux/store';
import { FormControl, Validators } from '@angular/forms';
import { WaybillService } from '../../waybill/waybill.service';

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
    imgPath: ''
  };
  category: ICategory = {
    _id: '',
    name: '',
    products: []
  };

  amountControl: FormControl;
  editMode = false;
  action = '';

  constructor(private route: ActivatedRoute, private waybillService: WaybillService,
    private ngRedux: NgRedux<IAppState>) { }

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
    this.editMode = false;
    if (this.action === 'add') {
      this.waybillService.addItem({
        categoryId: this.category._id,
        // categoryName: this.category.name,
        productId: this.product._id,
        productName: this.product.name,
        count: this.amountControl.value
      });
    } else {
      this.waybillService.addItem({
        categoryId: this.category._id,
        // categoryName: this.category.name,
        productId: this.product._id,
        productName: this.product.name,
        count: -this.amountControl.value
      });
    }
  }

  reset() {
    this.editMode = false;
    this.amountControl.reset();
  }
}
