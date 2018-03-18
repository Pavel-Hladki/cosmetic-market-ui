import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StoreComponent} from "./store/store.component";
import {DASHBOARD_ROUTES} from "./dashboard/dashboard.routes";
import {STORE_ROUTES} from "./store/store.routes";
import {SupplierComponent} from "./supplier/supplier.component";
import {SUPPLIER_ROUTES} from "./supplier/supplier.routes";

export const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: DASHBOARD_ROUTES, data: { menuItem: 'main', logo: 'white_logo'} },
  { path: '', component: StoreComponent, children: STORE_ROUTES, data: { menuItem: 'store', logo: 'green_logo'} },
  { path: 'supplier', component: SupplierComponent, children: SUPPLIER_ROUTES, data: { menuItem: 'supplier', logo: 'green_logo'}  }
];
