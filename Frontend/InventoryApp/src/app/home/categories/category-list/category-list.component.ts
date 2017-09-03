import { Component, OnInit, ElementRef } from '@angular/core';
import { StorageService } from '../../../core/storage.service';
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
    this.categories = this.storageService.categories;
  }
}
