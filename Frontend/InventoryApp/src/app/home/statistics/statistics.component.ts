import { Component, ViewChild, OnInit, ElementRef, Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
// Angular material
import { MdPaginator, MdSort } from '@angular/material';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
// Services
import { StatisticsService } from './statistics.service';
// Models
import { ILogItem } from '../../core/models/ILogItem';
// Custom date picker
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';

import fakeLogs from '../../fake-data/fake-logs-data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  // material table
  displayedColumns = ['date', 'productName', 'action'];
  // dataSource: ExampleDataSource | null;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('Productfilter') filter: ElementRef;

  // date picker
  private myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd.mm.yyyy',
    selectionTxtFontSize: '1rem',
    // localization
    selectBeginDateTxt: 'Выберите дату начала',
    selectEndDateTxt: 'Выберите дату окончания',
    dayLabels: {
      su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'
    },
    monthLabels: {
      1: 'Янв', 2: 'Фев', 3: 'Март', 4: 'Апр', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Авг', 9: 'Сен', 10: 'Окт', 11: 'Ноя', 12: 'Дек'
    },
    indicateInvalidDateRange: true,
    width: '250px'
  };
  private myForm: FormGroup;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    // this.dataSource = new ExampleDataSource(this.storageService, this.statisticsService, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        // if (!this.dataSource) { return; }
        // this.dataSource.filter = this.filter.nativeElement.value;
      });


    // Custom datepicker
    this.myForm = new FormGroup({
      myDateRange: new FormControl({}, Validators.required)
    });
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted, event.beginEpoc and event.endEpoc
    // console.log(event);
    this.statisticsService.dateRangeChanged.next(event);
  }

}

// export class ExampleDataSource extends DataSource<any> {
  // _filterChange = new BehaviorSubject('');
  // get filter(): string { return this._filterChange.value; }
  // set filter(filter: string) { this._filterChange.next(filter); }

  // constructor(private storageService: StorageService, private statisticsService: StatisticsService,
  //             private _paginator: MdPaginator, private _sort: MdSort) {
  //   super();
  // }

  // /** Connect function called by the table to retrieve one stream containing the data to render. */
  // connect(): Observable<ILogItem[]> {
  //   const displayDataChanges = [
  //     this.storageService.logsChanged,
  //     this._paginator.page,
  //     this._sort.mdSortChange,

  //     this._filterChange,

  //     this.statisticsService.dateRangeChanged,
  //   ];

  //   return Observable.merge(...displayDataChanges).map(() => {
  //     let data = this.getSortedData().filter((item: ILogItem) => {
  //       let searchStr = item.productName.toLowerCase();
  //       return searchStr.indexOf(this.filter.toLowerCase()) != -1;
  //     });

  //     // filters data by providen range of dates
  //     if (this.statisticsService.dateRangeChanged.value &&
  //         this.statisticsService.dateRangeChanged.value.beginJsDate) {
  //       const fromDate: Date = this.statisticsService.dateRangeChanged.value.beginJsDate;
  //       const toDate: Date = this.statisticsService.dateRangeChanged.value.endJsDate;
  //       toDate.setHours(24);
  //       data = data.filter((item) => item.date >= fromDate && item.date <= toDate);
  //     }

  //     // Grab the page's slice of data.
  //     const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
  //     return data.splice(startIndex, this._paginator.pageSize);
  //   });
  // }

  // disconnect() { }

  // /** Returns a sorted copy of the database data. */
  // getSortedData(): ILogItem[] {
  //   const data = this.storageService.logs.slice();
  //   if (!this._sort.active || this._sort.direction == '') { return data; }

  //   return data.sort((a, b) => {
  //     let propertyA: number | string = '';
  //     let propertyB: number | string = '';

  //     switch (this._sort.active) {
  //       case 'date': [propertyA, propertyB] = [a.date.getTime(), b.date.getTime()]; break;
  //       case 'action': [propertyA, propertyB] = [a.action, b.action]; break;
  //       case 'productName': [propertyA, propertyB] = [a.productName, b.productName]; break;
  //     }

  //     let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
  //     let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

  //     return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
  //   });
  // }
// }



