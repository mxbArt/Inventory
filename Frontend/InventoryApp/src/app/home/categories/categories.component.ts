import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
// rxjs
import { Subscription } from 'rxjs/Subscription';
// Services
import { StorageService } from '../../core/storage.service';
// Models
import { ICategory } from '../../core/models/ICategory.model';
// Angular material
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];

  selectedCategory: ICategory;

  // Autocomplete params
  values: string[] = [];
  stateCtrl: FormControl = new FormControl();
  filteredValue: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute,
              public dialog: MdDialog) { }

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

    // route subscription
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.selectedCategory = this.storageService.getCategory(params['id']);
        } else {
          this.selectedCategory = null;
        }
      }
    );
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }
}
