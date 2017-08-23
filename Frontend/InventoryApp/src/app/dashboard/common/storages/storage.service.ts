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
}
