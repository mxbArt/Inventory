import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// Models
import { ICategory } from '../../core/models/ICategory.model';
// Services
import { StorageService } from '../../core/storage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[] = [];

  // Autocomplete params
  values: string[] = [];
  stateCtrl: FormControl = new FormControl();
  filteredValue: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    // storage service subscription
    this.storageService.categoryChanged.subscribe(
      (categories) => {
        this.categories = categories;
        this.values = this.storageService.categoryNames;
      }
    );

    // autocomplete subscription
    this.filteredValue = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterValue(name));
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.values;
  }

}
