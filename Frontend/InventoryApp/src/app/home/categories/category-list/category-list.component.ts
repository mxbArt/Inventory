import { Component, OnInit, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CategoryAddDialogComponent } from '../category-add-dialog/category-add-dialog.component';
// Services
import { StorageService } from '../../../core/storage.service';
// Models
import { ICategory } from '../../../core/models/ICategory.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: ICategory[];

  constructor(private storageService: StorageService, public dialog: MdDialog) { }

  ngOnInit() {
    this.storageService.categoryChanged.subscribe(
      (categories) => {
        this.categories = this.storageService.categories;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryAddDialogComponent, {
      width: '300px',
      data: {
        name: 'Новая категория'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const category: ICategory = {
          id: Math.random().toString(),
          name: result.name,
          imgPath: result.imgPath,
          products: []
        };
        this.storageService.addCategory(category);
      }
    });
  }
}
