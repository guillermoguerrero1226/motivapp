import { Injectable } from '@angular/core';
import { LocalStorageKey } from 'src/app/core/enums/local-storage-key';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem<T>(key: LocalStorageKey, item: T) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem<T>(key: LocalStorageKey) {
    return localStorage.getItem(key) as T;
  }
}
