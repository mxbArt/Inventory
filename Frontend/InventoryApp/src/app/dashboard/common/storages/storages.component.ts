import { Component, OnInit } from '@angular/core';
// Interdaces
import { IStorage } from '../../../core/models/IStorage.model';
// Services
import { StorageService } from './storage.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})
export class StoragesComponent implements OnInit {
  storages: Array<IStorage>;

  constructor(private storageSevice: StorageService) { }

  ngOnInit() {
    this.storages = this.storageSevice.getStorages();
  }

}
