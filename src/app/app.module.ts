import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ImageCarouselComponent } from './Components/image-carousel/image-carousel.component';
import { ProductsComponent } from './Components/products/products.component';
import { MembershipsComponent } from './Components/memberships/memberships.component';
import { BranchesComponent } from './Components/branches/branches.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CartComponent } from './Components/cart/cart.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { CoachCardComponent } from './Components/coach-card/coach-card.component';
import { CoachesComponent } from './Components/coaches/coaches.component';
import { ProductsListViewComponent } from './Components/products-list-view/products-list-view.component';
import { ProductsGridViewComponent } from './Components/products-grid-view/products-grid-view.component';
import { CoachesListViewComponent } from './Components/coaches-list-view/coaches-list-view.component';
import { CoachesGridViewComponent } from './Components/coaches-grid-view/coaches-grid-view.component';
import { ProductsSidebarComponent } from './Components/products-sidebar/products-sidebar.component';
import { CoachesSidebarComponent } from './Components/coaches-sidebar/coaches-sidebar.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { LoadButtonComponent } from './Components/load-button/load-button.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { CoachViewComponent } from './Components/coach-view/coach-view.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { CoachesListComponent } from './Components/coaches-list/coaches-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageCarouselComponent,
    ProductsComponent,
    MembershipsComponent,
    BranchesComponent,
    AboutUsComponent,
    CartComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    NavbarComponent,
    ProductCardComponent,
    CoachCardComponent,
    CoachesComponent,
    ProductsListViewComponent,
    ProductsGridViewComponent,
    CoachesListViewComponent,
    CoachesGridViewComponent,
    ProductsSidebarComponent,
    CoachesSidebarComponent,
    WishListComponent,
    StarRatingComponent,
    LoadButtonComponent,
    ProductViewComponent,
    CoachViewComponent,
    ProductsListComponent,
    CoachesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
