import { Routes } from '@angular/router';

import { UserProductsListComponent } from "./user-products-list/user-products-list.component";

export const STORE_USER_ROUTES: Routes = [

  { path: 'products', component: UserProductsListComponent }
];
