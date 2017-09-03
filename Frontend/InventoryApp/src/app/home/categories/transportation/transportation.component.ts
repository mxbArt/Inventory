import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { StorageService } from './../../../core/storage.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {

  form: FormGroup;

  autocompleteValues = [];
  filteredValue: any;

  get formData() { return (<FormArray>this.form.get('data')).controls; }

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this._initForm();
    this.autocompleteValues = this.storageService.categoryNames;
  }

  private _initForm() {
    const data = new FormArray([]);
    data.push(new FormGroup({
      'category': new FormControl('', Validators.required),
      'amount': new FormControl('', Validators.required)
    }));
    this.form = new FormGroup({
      'data': data
    });

    this.subscribeToValueChanges();
  }

  addParam() {
    // creates new FormArray element.
    (<FormArray>this.form.controls['data']).push(
      new FormGroup({
        'category': new FormControl('', Validators.required),
        'amount': new FormControl('', Validators.required)
      })
    );

    this.subscribeToValueChanges();
  }

  resetForm() {
    this._initForm();
  }

  deleteFormArrayItem(index: number) {
    (<FormArray>this.form.get('data')).removeAt(index);
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


  submit() {
    console.log(this.form);
  }
}
