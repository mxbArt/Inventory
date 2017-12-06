import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Models
import { IProduct } from '../../../core/models/IProduct.model';
// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../core/redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {  }

  ngOnInit() {
    this.products = this.ngRedux.select((s: IAppState) =>
      s.products.filter(x => x.categoryId === this.route.snapshot.params['categoryId']));
  }
}
