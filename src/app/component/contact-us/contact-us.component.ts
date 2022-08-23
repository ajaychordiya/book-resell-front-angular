import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  name: String;
  email: String;
  msg: String;
  mobile_no: String;
  subs = new SubSink();
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const user = {
      fullName: this.name,
      email: this.email,
      msg: this.msg,
      mobile_no: this.mobile_no,
    };
    this.subs.add(
      this.http
        .post('http://localhost:3000/contactus/', user)
        .subscribe((res) => {
          this.router.navigateByUrl('/home');
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
