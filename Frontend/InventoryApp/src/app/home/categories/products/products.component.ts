import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

// Models
import { IProduct } from '../../../core/models/IProduct.model';
// Services
import { StorageService } from '../../../core/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  currentCategoryId: string;
  pruducts: IProduct[] = [];

  constructor(private route: ActivatedRoute, private storageService: StorageService) {  }

  ngOnInit() {
    // Storage service subscription
    this.storageService.productsChanged.subscribe(
      () => {
        this._receiveProducts(this.route.snapshot.params['id']);
      }
    );

    // route params subscription
    this.route.params.subscribe(
      (params: Params) => {
        this._receiveProducts(params['id']);
      }
    );
  }

  private _receiveProducts(categoryId) {
    if (categoryId) {
      this.currentCategoryId = categoryId;
      this.pruducts = this.storageService.getProducts(this.currentCategoryId);
    }
  }
}
