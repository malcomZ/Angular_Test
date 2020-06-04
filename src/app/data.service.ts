import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-04&sortBy=publishedAt&apiKey=f7ac189a3958420696b0d7ee63f05e1a';

  constructor(private _http: HttpClient) { }

  getTitle() {
    return this._http.get<News[]>(this.apiUrl);
  }
}
