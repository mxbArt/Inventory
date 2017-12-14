import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../core/redux/store';
import { ReduxActions } from '../../core/redux/ReduxActions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @select((s: IAppState) => s.appInEditMode) inEditMode: boolean;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {  }

  changeMode() {
    this.ngRedux.dispatch({ type: ReduxActions.APP_CHANGEMODE });
  }

  getState() {
    console.log(this.ngRedux.getState());
  }

}
