import { Routes } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { UserComponent } from "./user/user.component";
import { STORE_USER_ROUTES } from "./user/user.routes";

export const STORE_ROUTES: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'user', component: UserComponent, children: STORE_USER_ROUTES }
];
