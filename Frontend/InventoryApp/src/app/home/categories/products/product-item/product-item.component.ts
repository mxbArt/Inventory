import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';
// Components
import { CategoryAddDialogComponent } from '../../category-add-dialog/category-add-dialog.component';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { IWaybillItem } from '../../../../core/models/IWaybillItem.model';
// Services
import { WaybillService } from '../../waybill/waybill.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() categoryId: string;

  constructor(private waybillService: WaybillService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoryAddDialogComponent, {
      width: '300px',
      data: {
        name: 'Изменить Количество',
        placeholder: 'Количество'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const waybill: IWaybillItem = {
          categoryId: this.categoryId,
          productName: this.product.name,
          count: +result.value
        };
        this.waybillService.addItem(waybill);
      }
    });
  }

}
