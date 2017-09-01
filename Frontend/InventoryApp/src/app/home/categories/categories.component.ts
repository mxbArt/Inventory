import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
// Services
import { StorageService } from '../../core/storage.service';
// Models
import { ICategory } from '../../core/models/ICategory.model';
// rxjs
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories: ICategory[];

  // Autocomplete params
  values: string[] = [];
  stateCtrl: FormControl;
  filteredValue: any;

  subscription: Subscription;

  constructor(private storageService: StorageService) {
    this.stateCtrl = new FormControl();
    this.filteredValue = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterValue(name));
  }

  ngOnInit() {
    this.categories = this.storageService.categories;
    this.categories.forEach(i => {
      this.values.push(i.name);
    });
  }

  filterValue(val: string) {
    return val ? this.values.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.values;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
