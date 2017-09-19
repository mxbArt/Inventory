import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

// Angular material
import { MdDialog } from '@angular/material';
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

  // Autocomplete params
  values: string[] = [];
  stateCtrl: FormControl;
  filteredValue: any;

  constructor(private route: ActivatedRoute, private storageService: StorageService,
              public dialog: MdDialog) {
    // autocomplete
    this.stateCtrl = new FormControl();
    this.filteredValue = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterValue(name));
  }

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
      // Check for receiving values
      if (this.pruducts) {
        // autocomplete
        this.values = [];
        this.stateCtrl.reset();
        this.pruducts.forEach((p) => {
          this.values.push(p.name);
        });
        // this.pruducts.sort((p1, p2) => p1.name.localeCompare(p2.name));
      }
    }
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }

}
