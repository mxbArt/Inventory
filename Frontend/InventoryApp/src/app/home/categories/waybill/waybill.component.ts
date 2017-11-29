import { Component, OnInit } from '@angular/core';
// Models
import { IWaybillItem } from '../../../core/models/IWaybillItem.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';
import { ReduxActions } from '../../../core/redux/ReduxActions';
import { RequestService } from '../../../core/request.service';

@Component({
  selector: 'app-waybill',
  templateUrl: './waybill.component.html',
  styleUrls: ['./waybill.component.scss']
})
export class WaybillComponent implements OnInit {
  @select((s: IAppState) => s.waybill) waybill: IWaybillItem[];
  @select((s: IAppState) => s.waybill.length) waybillLength: number;

  constructor(private ngRedux: NgRedux<IAppState>, private requestService: RequestService) { }

  ngOnInit() {
  }

  deleteItem(item: IWaybillItem) {
    this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_REMOVE_ITEM, item: item });
  }

  clearWaybils() {
    this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_CLEAR });
  }

  submitWaybill() {
    this.requestService.processWaybill();
    // this.ngRedux.dispatch({ type: ReduxActions.WAYBILL_SUBMIT });
  }
}

