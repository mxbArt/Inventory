import { Component, OnInit, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
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

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.categoryChanged.subscribe(
      (categories) => {
        this.categories = this.storageService.categories;
      }
    );
  }
}
