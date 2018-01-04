import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StoreComponent} from "./store/store.component";
import {DASHBOARD_ROUTES} from "./dashboard/dashboard.routes";
import {STORE_ROUTES} from "./store/store.routes";

export const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: DASHBOARD_ROUTES },
  { path: '', component: StoreComponent, children: STORE_ROUTES }
];
