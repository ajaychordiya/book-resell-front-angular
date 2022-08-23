import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookAuthService } from 'src/app/services/book-auth.service';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit, OnDestroy {
  book_city: any;
  category: any;
  deviceValue: any;
  books: boolean = true;
  length: any;
  categorys: any;
  p: number = 1;
  subs = new SubSink();

  constructor(private book: BookAuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subs.add(
      this.book
        .getdistinctcategory()
        .subscribe((data) => (this.category = data))
    );
    this.getBook();
  }

  getBook() {
    this.deviceValue = localStorage.getItem('city');
    this.categorys = this.route.snapshot.params['category'];
    if (this.deviceValue === null) {
      this.subs.add(
        this.book
          .getBycategory(this.categorys)
          .subscribe((data) => (this.book_city = data))
      );
    } else {
      this.subs.add(
        this.book
          .getCityWithCategory(this.categorys, this.deviceValue)
          .subscribe((data) => {
            this.book_city = data;
            this.length = this.book_city.length;
          })
      );
    }
  }

  onChange(event) {
    this.categorys = event;
    if (this.deviceValue === null) {
      this.subs.add(
        this.book.getBycategory(this.categorys).subscribe((data) => {
          this.book_city = data;
          this.length = this.book_city.length;
        })
      );
    } else {
      this.subs.add(
        this.book
          .getCityWithCategory(event, this.deviceValue)
          .subscribe((data) => {
            this.book_city = data;
            this.length = this.book_city.length;
          })
      );
    }
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
