import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { MembershipsComponent } from './Components/memberships/memberships.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { BranchesComponent } from './Components/branches/branches.component';
import { CoachesComponent } from './Components/coaches/coaches.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'branches', component: BranchesComponent},
  {path: 'memberships', component: MembershipsComponent},
  {path: 'coaches', component: CoachesComponent},
  {path: 'wishlist', component: WishListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
