import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';


  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    ]}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }