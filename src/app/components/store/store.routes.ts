import { Routes } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const STORE_ROUTES: Routes = [
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
];
