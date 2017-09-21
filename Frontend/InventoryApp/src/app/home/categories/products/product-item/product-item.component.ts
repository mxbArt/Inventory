import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() categoryId: string;

  constructor() { }

  ngOnInit() {
  }

}
