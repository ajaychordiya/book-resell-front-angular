import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: String;
  password: String;
  errorMessages: boolean;
  showSucessMessage: boolean;
  subs = new SubSink();

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const data = {
      email: this.email,
      password: this.password,
    };

    //console.log(this.email);
    this.subs.add(
      this.authService.login(data).subscribe(
        (res) => {
          this.showSucessMessage = true;

          this.authService.setToken(res['token']);
          localStorage.setItem('user', res['user']);
          localStorage.setItem('email', res['email']);

          this.router.navigateByUrl('/home');
        },
        (err) => {
          this.errorMessages = true;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
