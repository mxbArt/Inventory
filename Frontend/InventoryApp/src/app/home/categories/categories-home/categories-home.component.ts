import { Component, OnInit } from '@angular/core';
// Models
import { ICategory } from '../../../core/models/ICategory.model';
// Services
import { StorageService } from '../../../core/storage.service';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.scss']
})
export class CategoriesHomeComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    // storage service subscription
    this.storageService.categoryChanged.subscribe(
      (categories) => {
        this.categories = categories;
      }
    );
  }
}
