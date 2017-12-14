import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Models
import { ICategory } from '../../../../core/models/ICategory.model';
// Redux
import { IAppState } from '../../../../core/redux/store';
import { select, NgRedux } from 'ng2-redux';
import { environment } from '../../../../../environments/environment';
import { ReduxActions } from '../../../../core/redux/ReduxActions';
import { RequestService } from '../../../../core/request.service';
import { NotificationService } from '../../../../core/notification.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input('item') category: ICategory;
  @select((s: IAppState) => s.appInEditMode) readonly editMode: Observable<boolean>;

  imgErrorPath = environment.imgNotFoundPath;

  constructor(private ngRedux: NgRedux<IAppState>, private requestService: RequestService,
    private notificationService: NotificationService) { }

  ngOnInit() {
  }

  handleImgError(event) {
    event.target.src = this.imgErrorPath;
    this.notificationService.error(`Image for category ${this.category.name} could not load`);
  }

  markModel() {
    if (this.category.edited !== true) {
      this.category.edited = true;
      // console.log(`category with id ${this.category.id} marked as edited`);
    }
  }

  discardChanges() {
    this.requestService.getCategory(this.category.id).subscribe((data) => {
      const category: ICategory = data.json();
      this.ngRedux.dispatch({ type: ReduxActions.APP_DISCARD_CATEGORY, oldCategory:
        {
          id: category.id,
          name: category.name,
          imgPath: category.imgPath,
          // edited: false
        }
      });
    });
  }
}
