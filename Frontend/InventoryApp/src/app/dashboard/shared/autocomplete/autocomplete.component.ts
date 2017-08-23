import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

// rxjs
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() placeholder: string;
  @Input() value = [];

  stateCtrl: FormControl;
  filteredValue: any;

  subscription: Subscription;

  constructor(private autoService: AutocompleteService) {
    this.stateCtrl = new FormControl();
    this.filteredValue = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterValue(name));
    this.subscription = this.stateCtrl.valueChanges.subscribe(
      () => {
        this.exportSelectedValueToService();
      }
    );
  }

  ngOnInit(): void {  }

  filterValue(val: string) {
    return val ? this.value.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.value;
  }

  exportSelectedValueToService() {
    this.autoService.selectedValue = this.stateCtrl.value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.autoService.selectedValue = '';
  }
}
