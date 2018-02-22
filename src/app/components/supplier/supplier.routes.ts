import { Routes } from '@angular/router';
import { ProductsTableComponent } from "./products-table/products-table.component";

export const SUPPLIER_ROUTES: Routes = [
  { path: 'products', component: ProductsTableComponent }
];
