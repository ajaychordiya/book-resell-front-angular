import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  books: any;
  users: any;
  subs = new SubSink();
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);

    let book = this.http.get(`http://localhost:3000/api/${id}`);
    this.subs.add(
      book.subscribe((data) => {
        this.books = data;
        localStorage.setItem('citys', this.books.city);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
