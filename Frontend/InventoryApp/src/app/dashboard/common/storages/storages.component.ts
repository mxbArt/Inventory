import { Component, OnInit } from '@angular/core';
// Interdaces
import { IStorage } from '../../../core/models/IStorage.model';
// Services
import { StorageService } from './storage.service';
import { AutocompleteService } from '../../shared/autocomplete/autocomplete.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})
export class StoragesComponent implements OnInit {
  storages: Array<IStorage>;
  storagesAdresses: Array<string>;

  constructor(public storageSevice: StorageService, public autoService: AutocompleteService) { }

  ngOnInit() {
    this.storages = this.storageSevice.getStorages();
    this.storagesAdresses = this.storageSevice.getStoragesAdress();
  }

}
