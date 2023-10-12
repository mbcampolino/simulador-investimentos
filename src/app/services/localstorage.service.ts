import { Injectable } from '@angular/core';
import { CacheModel } from '../models/CacheModel';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  cache : CacheModel[] = []
  showLastSearch = false

  constructor() {
    this.cache = this.getItem()
  }

  add(cache: CacheModel) {
    this.cache.push(cache)
    this.save()
  }

  private save() {
    localStorage.setItem("last_search", JSON.stringify(this.cache));
    console.log(this.cache)
  }

  getItem(): CacheModel[] {
    var listSaved = localStorage.getItem("last_search")
    if (listSaved) {
      return JSON.parse(listSaved);
    }
    return []
  }
}
