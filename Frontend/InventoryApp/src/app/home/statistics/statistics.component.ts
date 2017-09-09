import { Component, ViewChild, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
// Angular material
import { MdPaginator, MdSort } from '@angular/material';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
// Services
import { StorageService } from '../../core/storage.service';
// Models
import { ILogItem } from '../../core/models/ILogItem';

import fakeLogs from '../../fake-data/fake-logs-data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  displayedColumns = ['date', 'productName', 'action'];
  dataSource: ExampleDataSource | null;

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.storageService, this.paginator, this.sort);
  }

}


export class ExampleDataSource extends DataSource<any> {
  constructor(private storageService: StorageService, private _paginator: MdPaginator, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ILogItem[]> {
    const displayDataChanges = [
      this.storageService.logsChanged,
      this._paginator.page,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }

  /** Returns a sorted copy of the database data. */
  getSortedData(): ILogItem[] {
    const data = this.storageService.logs.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'date': [propertyA, propertyB] = [a.date.getTime(), b.date.getTime()]; break;
        case 'action': [propertyA, propertyB] = [a.action, b.action]; break;
        case 'productName': [propertyA, propertyB] = [a.productName, b.productName]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}



