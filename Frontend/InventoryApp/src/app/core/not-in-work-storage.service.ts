import { Injectable } from '@angular/core';

import { LocalStorageService } from 'ngx-webstorage';

import { Observable } from 'rxjs/Observable';

/**
 * Service to work with LocalStorage.
 *
 * @export
 * @class StorageService
 */
@Injectable()
export class StorageService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  save(key: string, value: string): void {
    this.localStorage.store(key, value);
  }

  get(key: string): any {
    return this.localStorage.retrieve(key);
  }

  getObservable(key: string): Observable<string> {
    return this.localStorage.observe(key);
  }

  clear(key: string): void {
    this.localStorage.clear(key);
  }

}
