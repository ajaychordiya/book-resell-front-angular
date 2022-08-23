import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubSink } from 'subsink';
import { BookAuthService } from 'src/app/services/book-auth.service';

@Component({
  selector: 'app-recommendation-book',
  templateUrl: './recommendation-book.component.html',
  styleUrls: ['./recommendation-book.component.css'],
})
export class RecommendationBookComponent implements OnInit, OnDestroy {
  books: any;
  cate: any;
  subs = new SubSink();
  constructor(private http: HttpClient, private book: BookAuthService) {}

  ngOnInit(): void {
    this.cate = localStorage.getItem('citys');
    let book1 = this.book.getBookbyCity(this.cate);
    this.subs.add(
      book1.subscribe((data) => {
        this.books = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
