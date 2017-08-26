import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// Fake storage
import fakeProductsNames from '../../../fake-data/fake-products-names';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  placeholder: string;
  autocompleteValues = [];

  stateCtrl: FormControl;
  filteredValue: any;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredValue = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterValue(name));
  }

  // fake storage
  ngOnInit(): void {
    this.autocompleteValues = fakeProductsNames.slice();
  }

  filterValue(val: string) {
    return val ? this.autocompleteValues.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.autocompleteValues;
  }

}
