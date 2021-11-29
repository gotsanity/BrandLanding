import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavbarComponent,
      ProductComponent,
      LandingComponent,
      ProductDetailComponent,
      PostCreateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
