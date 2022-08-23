import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { SellComponent } from './component/sell/sell.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SearchComponent } from './component/search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './component/profile/profile.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { CityComponent } from './component/city/city.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sell', component: SellComponent, canActivate: [AuthGuard] },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home/category/:category', component: CityComponent },
  {
    path: 'delete/:id',
    component: DeleteBookComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
