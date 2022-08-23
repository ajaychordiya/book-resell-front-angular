import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.css'],
})
export class UserBookComponent implements OnInit, OnDestroy {
  user: any;
  bookInfo: any;
  books: any;
  length: any;
  subs = new SubSink();
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if (this.user) {
      this.bookInfo = this.authService.getUsers(this.user);
      this.subs.add(
        this.bookInfo.subscribe((data) => {
          this.books = data;
          this.length = data.length;
        })
      );
      console.log(this.books);
    }
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
