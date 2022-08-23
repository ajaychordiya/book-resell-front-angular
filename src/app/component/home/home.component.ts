import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookAuthService } from 'src/app/services/book-auth.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  books: any;
  category: any;
  city: any;
  sub: any;
  sub1: any;
  sub2: any;
  p: number = 1;
  a: any;
  subs = new SubSink();
  constructor(private http: HttpClient, private book: BookAuthService) {}

  ngOnInit(): void {
    this.a = localStorage.getItem('city');
    this.getBooks(this.a);
    this.getCategory();
    this.book.city$.subscribe((data) => {
      this.city = data;
      this.getBooks(this.city);
    });
  }
  getBooks(city1: string) {
    console.log(city1);
    this.city = city1;
    if (this.city === null) {
      this.subs.add(
        this.book.getBook().subscribe((data) => (this.books = data))
      );
    } else {
      this.subs.add(
        this.book.getCity(this.city).subscribe((data) => (this.books = data))
      );
    }
  }
  getCategory() {
    this.subs.add(
      this.book
        .getdistinctcategory()
        .subscribe((data) => (this.category = data))
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
