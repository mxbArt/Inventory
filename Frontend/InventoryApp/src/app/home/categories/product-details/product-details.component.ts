import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
// Services
import { StorageService } from '../../../core/storage.service';
import { WaybillService } from '../waybill/waybill.service';
// Models
import { IProduct } from '../../../core/models/IProduct.model';
import { ICategory } from '../../../core/models/ICategory.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  category: ICategory;

  amountControl: FormControl;
  editMode = false;
  action = '';

  constructor(private storageService: StorageService, private route: ActivatedRoute, private waybillService: WaybillService) { }

  ngOnInit() {
    // subscription to route params changes.
    this.route.params.subscribe(
      (params: Params) => {
        this._subscribe(params);
      }
    );

    // subscription to storage service changes.
    this.storageService.productsChanged.subscribe(
      () => {
        this._subscribe(this.route.snapshot.params);
      }
    );

    this.amountControl = new FormControl('', [Validators.required, Validators.min(1)]);
  }

  private _subscribe(params: Params) {
    this.product = this.storageService.getProduct(params['categoryId'], params['productId']);
    this.category = this.storageService.getCategory(params['categoryId']);
  }

  submit() {
    this.editMode = false;
    if (this.action === 'add') {
      this.waybillService.addItem({
        categoryId: this.category.id,
        categoryName: this.category.name,
        productId: this.product.id,
        productName: this.product.name,
        count: this.amountControl.value
      });
    } else {
      this.waybillService.addItem({
        categoryId: this.category.id,
        categoryName: this.category.name,
        productId: this.product.id,
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
