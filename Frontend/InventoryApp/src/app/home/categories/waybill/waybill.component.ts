import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';
// Services
import { WaybillService } from './waybill.service';
// rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';
import { ReduxActions } from '../../../core/redux/ReduxActions';

@Component({
  selector: 'app-waybill',
  templateUrl: './waybill.component.html',
  styleUrls: ['./waybill.component.scss']
})
export class WaybillComponent implements OnInit {

  displayedColumns = ['actions', 'productName', 'count'];
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private waybillService: WaybillService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.ngRedux, this.paginator);
  }

  deleteItem(item: IWaybillItem) {
    this.waybillService.removeItem(item);
  }

  clearWaybils() {
    this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_CLEAR });
    console.log(this.ngRedux.getState().waybill);
    //this.waybillService.clearWaybills();
  }

  submitWaybill() {
    this.waybillService.submit();
  }
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<any> {
  // data: IWaybillItem[];

  constructor(private ngRedux: NgRedux<IAppState>, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IWaybillItem[]> {
    const displayDataChanges = [
      this._paginator.page,
    ];

    // this.ngRedux.subscribe(() => {
    //   this.data = this.ngRedux.getState().waybill;
    // });

    return Observable.merge(...displayDataChanges).map(() => {
      const data: IWaybillItem[] = this.ngRedux.getState().waybill;
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}
