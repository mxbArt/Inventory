import { Component, OnInit, Input } from '@angular/core';
// Models
import { ICategory } from '../../../core/models/ICategory.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input('item') category: ICategory;

  constructor() { }

  ngOnInit() {
  }

}
