import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  warnRefreshCache: boolean = false;

  setWarnRefreshCache(value: boolean) {
    this.warnRefreshCache = value;
  }

  getWarnRefreshCache() {
    return this.warnRefreshCache;
  }
}
