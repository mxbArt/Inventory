import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ProductsActions } from '../../../../../core/enums/product-actions.enum';

@Component({
  selector: 'app-change-amount-dialog',
  templateUrl: './change-amount-dialog.component.html',
  styleUrls: ['./change-amount-dialog.component.scss']
})
export class ChangeAmountDialogComponent implements OnInit {
  countFormControl: FormControl;

  operation: ProductsActions;
  availableCount: number;

  constructor(
    public dialogRef: MdDialogRef<ChangeAmountDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
      this.operation = data.operation;
      this.availableCount = data.availableCount;
    }

  ngOnInit() {
    if (this.operation === ProductsActions.Remove) {
      this.countFormControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(this.availableCount)]);
    } else {
      this.countFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
    }
  }

  onClose() {
    if (this.countFormControl.valid) {
      if (this.operation === ProductsActions.Remove) {
        return {'value': this.countFormControl.value * (-1) };
      } else {
        return {'value': this.countFormControl.value };
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
