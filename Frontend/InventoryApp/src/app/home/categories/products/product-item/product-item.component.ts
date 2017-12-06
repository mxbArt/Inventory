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

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() categoryId: string;
  @select((s: IAppState) => s.appInEditMode) editMode: Observable<boolean>;

  private _savedCopy: IProduct;
  imgErrorPath = environment.imgNotFoundPath;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this._savedCopy = Object.assign({}, this.product);
  }

  handleImgError(event) {
    event.target.src = this.imgErrorPath;
  }

  logToConsole() {
    console.log(this.product);
    console.log(this._savedCopy);
  }

  discardChanges() {
    this.product = this._savedCopy;
  }

}
