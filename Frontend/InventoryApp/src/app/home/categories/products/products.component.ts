import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../../../core/models/IProduct.model';
import { StorageService } from '../../../core/storage.service';
import { FormControl } from '@angular/forms';

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

  constructor(private route: ActivatedRoute, private storageService: StorageService) {
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
          this.pruducts.sort();
        }
      }
    );
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }

}
