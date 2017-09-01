import { Component, OnInit } from '@angular/core';
// Services
import { StorageService } from '../../core/storage.service';
// Models
import { ICategory } from '../../core/models/ICategory.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.categories = this.storageService.categories;
  }

}
