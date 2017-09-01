import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../../../core/storage.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['../delivery.component.scss']
})
export class DeliveryFormComponent implements OnInit {
  form: FormGroup;

  autocompleteValues = [];
  filteredValue: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this._initForm();
    this.autocompleteValues = this.storageService.categoryNames;
  }

  private _initForm() {
    this.form = new FormGroup({
      'data': new FormArray([
        new FormGroup({
          'category': new FormControl(null, Validators.required),
          'amount': new FormControl(null, Validators.required)
        })
      ])
    }, Validators.required);

    this.subscribeToValueChanges();
  }

  subscribeToValueChanges() {
    const ctrlNumber = (<FormArray>this.form.get('data')).controls.length - 1;

    this.filteredValue = ((<FormGroup>(<FormArray>this.form.get('data')).controls[ctrlNumber]).controls['category']).valueChanges
      .startWith(null)
      .map(name => this.filterValue(name));
  }

  filterValue(val: string) {
    return val ? this.autocompleteValues.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.autocompleteValues;
  }

  addParam() {
    // creates new FormArray element.
    (<FormArray>this.form.controls['data']).controls.push(
      new FormGroup({
        'category': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    );

    this.subscribeToValueChanges();
  }

  submit() {
    console.log(this.form);
  }

}
