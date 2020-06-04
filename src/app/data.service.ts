import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-04&sortBy=publishedAt&apiKey=f7ac189a3958420696b0d7ee63f05e1a';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
