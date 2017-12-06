import { Component, OnInit } from '@angular/core';
// Services
import { RequestService } from '../core/request.service';
// Models
import { ICategory } from '../core/models/ICategory.model';
import { IProduct } from '../core/models/IProduct.model';
// Redux
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState } from '../core/redux/store';
import { ReduxActions } from '../core/redux/ReduxActions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.loadData().categories.subscribe(
      (data) => {
        // dispatch an action
        this.ngRedux.dispatch({
          type: ReduxActions.DATA_LOAD_SUCCESS,
          data: data.json()
        });
      },
      (error) => {
        this.ngRedux.dispatch({
          type: ReduxActions.DATA_LOAD_ERROR,
          error: error
        });
      }
    );
  }

}
