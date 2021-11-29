import { PostCreateComponent } from './post-create/post-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'post/create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }