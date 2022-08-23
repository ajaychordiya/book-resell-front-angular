import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BookAuthService } from 'src/app/services/book-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  search: String;
  auth: any;
  books: any;
  user: any;
  userInfo: any;
  users: any;
  city1: any;
  book_city: any;

  selectCity: any;
  email: any;
  city: any;
  isSelected: boolean = true;
  //@Input() name: String;
  constructor(
    private router: Router,
    public authservice: AuthServiceService,
    private http: HttpClient,
    private book: BookAuthService
  ) {
    this.isLogin();
  }

  ngOnInit(): void {
    this.isLogin();
    this.city = this.book.getDistinctCity();
    this.city.subscribe((data) => (this.city1 = data));
    this.selectCity = localStorage.getItem('city');
    this.selectedCity(this.selectCity);
  }

  ngOnChanges(): void {
    this.isLogin();
  }
  selectedCity(city: string) {
    if (city === null) {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }
  }
  onSubmit1() {
    const book = {
      search: this.search,
    };
    this.router.navigateByUrl(`/search/${book.search}`);
  }

  onChange(deviceValue) {
    this.book.fixcity(deviceValue);
    localStorage.setItem('city', deviceValue);
    this.selectCity = deviceValue;
    this.router.navigateByUrl(`/home`);
  }
  logOut() {
    this.authservice.removeToken(localStorage.getItem('token'));
    localStorage.removeItem('user');
    this.isLogin();
  }
  isLogin() {
    this.auth = this.authservice.isLoggedIn();
    this.user = localStorage.getItem('user');
    console.log(this.user);
    if (this.auth) {
      this.userInfo = this.http.get(`http://localhost:3000/${this.user}`);
      this.userInfo.subscribe((data) => (this.users = data.email));
    }
  }

  ngOnDestroy(): void {
    this.userInfo.unsubscribe();
    this.city.unsubscribe();
  }
}
