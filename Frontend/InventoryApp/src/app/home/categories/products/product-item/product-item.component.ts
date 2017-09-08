import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
// Dialog
import { ChangeAmountDialogComponent } from './change-amount-dialog/change-amount-dialog.component';
// Enums
import { ProductsActions } from './product-actions.enum';
// Models
import { IProduct } from '../../../../core/models/IProduct.model';
import { IWaybillItem } from '../../../../core/models/IWaybillItem.model';
// Services
import { WaybillService } from '../../waybill/waybill.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  @Input() categoryId: string;

  ADD = ProductsActions.Add;
  REMOVE = ProductsActions.Remove;

  constructor(private waybillService: WaybillService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(action: ProductsActions) {
    let dialogName: string;
    let availableCount;
    if (action === ProductsActions.Add) {
      dialogName = 'Добавление';
    } else {
      dialogName = 'Удаление';
      availableCount = this.product.count;
    }

    const dialogRef = this.dialog.open(ChangeAmountDialogComponent, {
      width: '300px',
      data: {
        name: dialogName,
        placeholder: 'Количество',
        availableCount: availableCount,
        operation: action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const waybill: IWaybillItem = {
          categoryId: this.categoryId,
          productName: this.product.name,
          count: result.value
        };
        this.waybillService.addItem(waybill);
      }
    });
  }

}
