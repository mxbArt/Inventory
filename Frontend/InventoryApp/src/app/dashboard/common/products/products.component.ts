import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
// Fake storage
import fakeProductsNames from '../../../fake-data/fake-products-names';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchForm: FormGroup;
  autocompleteValues = [];
  filteredValue: any;

  constructor() { }

  // fake storage
  ngOnInit(): void {
    this.autocompleteValues = fakeProductsNames.slice();

    this.initForm();
  }

  initForm() {
    // initializes form.
    this.searchForm = new FormGroup({
      'searchParams': new FormArray([
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, Validators.required)
        }, Validators.required)
      ], Validators.required)
    });

    this.subscribeToValueChanges();
  }

  // subscribes last added form control 'name' to the valueChanges event.
  subscribeToValueChanges() {
    const ctrlNumber = (<FormArray>this.searchForm.get('searchParams')).controls.length - 1;

    this.filteredValue = ((<FormGroup>(<FormArray>this.searchForm.get('searchParams')).controls[ctrlNumber]).controls['name']).valueChanges
    .startWith(null)
    .map(name => this.filterValue(name));
  }

  filterValue(val: string) {
    return val ? this.autocompleteValues.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.autocompleteValues;
  }

  addParam() {
    // creates new FormArray element.
    (<FormArray>this.searchForm.controls['searchParams']).controls.push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      }, Validators.required)
    );

    this.subscribeToValueChanges();
  }

  submit() {
    console.log(this.searchForm);
  }
}
