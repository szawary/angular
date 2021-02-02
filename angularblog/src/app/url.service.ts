import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url: string = "/";
  urlChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  pushUrl(url: string) {
    this.url = url;
    this.urlChanged.emit(this.url);
  }
}
