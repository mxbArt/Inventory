import { Component, OnInit, Inject, Input } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-category-add-dialog',
  templateUrl: './category-add-dialog.component.html',
  styleUrls: ['./category-add-dialog.component.scss', '../categories.component.scss']
})
export class CategoryAddDialogComponent implements OnInit {

  //data: string;
  //imgPath: string;
  value;

  constructor(
    public dialogRef: MdDialogRef<CategoryAddDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
