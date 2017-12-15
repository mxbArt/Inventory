import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../core/redux/store';
import { ReduxActions } from '../../core/redux/ReduxActions';
import { RequestService } from '../../core/request.service';
import { IUpdatedItems } from '../../core/models/IUpdatedItems.model';
import { NotificationService } from '../../core/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @select((s: IAppState) => s.appInEditMode) inEditMode: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private requestService: RequestService,
              private notificationService: NotificationService) { }

  ngOnInit() {  }

  changeMode() {
    if (this.ngRedux.getState().appInEditMode === true) {
      const updatedItems: IUpdatedItems = {
        updatedProducts: this.ngRedux.getState().products.filter(p => p.edited === true),
        updatedCategories: this.ngRedux.getState().categories.filter(c => c.edited === true)
      };
      updatedItems.updatedProducts.forEach(e => {
        e.imgPath = e.imgPath.toLowerCase();
      });
      updatedItems.updatedCategories.forEach(e => {
        e.imgPath = e.imgPath.toLowerCase();
      });
      // checks for exist items
      if (updatedItems.updatedCategories.length !== 0 || updatedItems.updatedProducts.length !== 0) {
        this.requestService.updateModels(updatedItems).subscribe(
          () => {
            this.notificationService.success('Изменения сохранены');
            this.ngRedux.dispatch({ type: ReduxActions.APP_CHANGEMODE });
          },
          (error) => {
            this.notificationService.error('Ошибка при сохранении изменений. Пожалуйста, повторите попытку');
          }
        );
      } else {
        this.ngRedux.dispatch({ type: ReduxActions.APP_CHANGEMODE });
      }
    } else {
      this.ngRedux.dispatch({ type: ReduxActions.APP_CHANGEMODE });
    }
  }

  getState() {
    console.log(this.ngRedux.getState());
  }

}
