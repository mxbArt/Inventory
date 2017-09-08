import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-add-dialog',
  templateUrl: './item-add-dialog.component.html',
  styleUrls: ['./item-add-dialog.component.scss']
})
export class ItemAddDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<ItemAddDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imgPath': new FormControl('', Validators.required)
    });
  }

  onClose() {
    return {
      'name': this.form.controls['name'].value,
      'imgPath': this.form.controls['imgPath'].value
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
