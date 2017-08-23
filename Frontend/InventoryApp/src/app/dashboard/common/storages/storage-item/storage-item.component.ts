import { Component, OnInit, Input } from '@angular/core';
// Interfaces
import { IStorage } from '../../../../core/models/IStorage.model';

@Component({
  selector: 'app-storage-item',
  templateUrl: './storage-item.component.html',
  styleUrls: ['./storage-item.component.scss']
})
export class StorageItemComponent implements OnInit {
  @Input() storage: IStorage;

  constructor() { }

  ngOnInit() {
  }

}
