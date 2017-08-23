import { Injectable } from '@angular/core';
// Interfaces
import { IStorage } from '../../../core/models/IStorage.model';
// Fake storage
import fakeStorages from '../../../fake-data/fake-storages';

@Injectable()
export class StorageService {
  constructor() {}

  getStorages(): Array<IStorage> {
    return fakeStorages;
  }

  getStoragesAdress(): Array<string> {
    let adresses = new Array<string>();
    fakeStorages.forEach((s) => {
      if (adresses.indexOf(s.adress) === -1) {
        adresses.push(s.adress);
      }
    });
    adresses.sort();

    return adresses;
  }
}
