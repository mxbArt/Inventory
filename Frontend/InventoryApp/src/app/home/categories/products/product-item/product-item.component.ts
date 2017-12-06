import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
// Redux
import { IAppState } from '../../../../core/redux/store';
import { select } from 'ng2-redux';
import { environment } from '../../../../../environments/environment';
import { RequestService } from '../../../../core/request.service';
import { ReduxActions } from '../../../../core/redux/ReduxActions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @select((s: IAppState) => s.appInEditMode) editMode: Observable<boolean>;

  imgErrorPath = environment.imgNotFoundPath;

  constructor(private ngRedux: NgRedux<IAppState>, private requestService: RequestService) { }

  ngOnInit() {  }

  handleImgError(event) {
    event.target.src = this.imgErrorPath;
  }

  logToConsole() {
    console.log(this.product);
  }

  discardChanges() {
    this.requestService.getProduct(this.product.id).subscribe(
      (data) => {
        this.ngRedux.dispatch({ type: ReduxActions.APP_DISCARD_PRODUCT, oldProduct: data.json()});
      }
    );
  }

}
