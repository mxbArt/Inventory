import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';
import { select } from 'ng2-redux/lib/decorators/select';
import { ICategory } from '../../../core/models/ICategory.model';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {
  @select((s: IAppState) => s.categories) categories: ICategory[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
