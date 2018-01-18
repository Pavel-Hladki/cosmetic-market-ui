import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app.component';
import { ProductsComponent } from './components/store/products/products.component';
import { ProductDetailComponent } from './components/store/product-detail/product-detail.component';
import { ProductService } from "./services/product.service";
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";
import { Logger } from "./services/logger.service";
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MessagesComponent } from "./components/shared/messages/messages.component";
import { ProductSearchComponent } from "./components/shared/product-search/product-search.component";
import { ProductsItemComponent } from './components/store/products/products-item/products-item.component';
import { PaginationComponent } from './components/store/pagination/pagination.component';
import { ProductsControlPanelComponent } from './components/store/products/products-control-panel/products-control-panel.component';
import { LineCategoryComponent } from './components/store/products/widgets/line-category-widget/line-category-widget.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SupplierComponent } from "./components/supplier/supplier.component";
import { ProductsTableComponent } from "./components/supplier/products-table/products-table.component";
import { AccountNavigationComponent } from "./components/supplier/account-navigation/account-navigation.component";
import { ProductRecordComponent } from "./components/supplier/products-table/product-record/product-record.component";
import { ProductFormComponent } from './components/supplier/product-form/product-form.component';
import { QuickviewModalComponent } from './components/store/product-detail/quickview-modal/quickview-modal.component';
import { SearchWidgetComponent } from './components/store/products/widgets/search-widget/search-widget.component';
import { ProductItemGridComponent } from './components/store/products/products-item/product-item-grid/product-item-grid.component';
import { ProductItemListComponent } from './components/store/products/products-item/product-item-list/product-item-list.component';

@NgModule({
  //todo separate on several modules
  //todo rename app components after, delete prefix e.g. products-item -> item or item-block
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProductSearchComponent,
    StoreComponent,
    ProductsItemComponent,
    PaginationComponent,
    ProductsControlPanelComponent,
    LineCategoryComponent,
    ProductsTableComponent,
    SupplierComponent,
    AccountNavigationComponent,
    ProductRecordComponent,
    ProductFormComponent,
    QuickviewModalComponent,
    SearchWidgetComponent,
    ProductItemGridComponent,
    ProductItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot()
  ],
  providers: [ProductService, MessageService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
//todo thing about lazy-loading of modules
