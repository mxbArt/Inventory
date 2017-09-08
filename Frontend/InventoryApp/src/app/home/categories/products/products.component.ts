import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoryAddDialogComponent } from '../category-add-dialog/category-add-dialog.component';
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
  pruducts: IProduct[];

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
    // route params
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.currentCategoryId = params['id'];
          this.pruducts = this.storageService.getProducts(this.currentCategoryId);
          this.values = [];
          this.stateCtrl.reset();
          this.pruducts.forEach((p) => {
            this.values.push(p.name);
          });
          //this.pruducts.sort((p1, p2) => p1.name.localeCompare(p2.name));
        }
      }
    );

    // storage service subscriptions
    // recreate autocomplete values
    this.storageService.productsChanged.subscribe(
      (products) => {
        this.values = [];
        this.stateCtrl.reset();
        this.pruducts.forEach((p) => {
          this.values.push(p.name);
        });
      }
    );
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }


  openDialog() {
    const dialogRef = this.dialog.open(CategoryAddDialogComponent, {
      width: '300px',
      data: {
        name: 'Новый продукт'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const product: IProduct = {
          id: Math.random().toString(),
          name: result.name,
          imgPath: result.imgPath,
          count: 0
        };
        this.storageService.addProductToCategory(product, this.currentCategoryId);
      }
    });
  }
}
