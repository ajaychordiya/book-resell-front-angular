import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './component/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { CarousalComponent } from './component/carousal/carousal.component';
import { SellComponent } from './component/sell/sell.component';
import { AuthServiceService } from './services/auth-service.service';
import { BookAuthService } from './services/book-auth.service';
import { ProductComponent } from './component/product/product.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SearchComponent } from './component/search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './component/profile/profile.component';
import { UserBookComponent } from './component/user-book/user-book.component';
import { RecommendationBookComponent } from './component/recommendation-book/recommendation-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { CityComponent } from './component/city/city.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    CarousalComponent,
    SellComponent,
    ProductComponent,
    ContactUsComponent,
    SearchComponent,
    ProfileComponent,
    UserBookComponent,
    RecommendationBookComponent,
    DeleteBookComponent,
    CityComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthServiceService,
    BookAuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
