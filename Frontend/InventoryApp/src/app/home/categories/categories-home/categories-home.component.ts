import { Component, OnInit } from '@angular/core';
// Models
import { ICategory } from '../../../core/models/ICategory.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.scss']
})
export class CategoriesHomeComponent implements OnInit {

  @select((s: IAppState) => s.categories) categories: ICategory[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
}
