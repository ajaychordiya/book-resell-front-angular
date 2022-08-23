import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookAuthService {
  baseURL = `https://book-resellll.herokuapp.com`;
  //city: string;
  private citySource = new Subject<string>();
  city$ = this.citySource.asObservable();
  constructor(private http: HttpClient) {}

  upload(data) {
    return this.http.post(`${this.baseURL}/api/upload`, data);
  }

  sell(data) {
    return this.http.post(`${this.baseURL}/api/sell`, data);
  }

  getCity(city) {
    return this.http.get(`${this.baseURL}/api/city2/${city}`);
  }

  getdistinctcategory() {
    return this.http.get(`${this.baseURL}/api/cat`);
  }
  getCityWithCategory(category: string, city: string) {
    return this.http.get(`${this.baseURL}/api/citys/${city}/${category}`);
  }
  getBook() {
    return this.http.get(`${this.baseURL}/api/book`);
  }
  getBycategory(category) {
    return this.http.get(`${this.baseURL}/api/categ/${category}`);
  }
  getDistinctCity() {
    return this.http.get(`${this.baseURL}/api/city1`);
  }
  fixcity(city: string) {
    this.citySource.next(city);
  }
  search(title: string) {
    return this.http.get(`${this.baseURL}/api/book/${title}`);
  }
  searchWithCity(name: string, city: string) {
    return this.http.get(`${this.baseURL}/api/book1/${name}/${city}`);
  }
  getBookbyCity(city: string) {
    return this.http.get(`${this.baseURL}/api/city/${city}`);
  }
}
