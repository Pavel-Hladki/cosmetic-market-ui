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
import { PaginationComponent } from './components/store/products/products-pagination/products-pagination.component';
import { ProductsControlPanelComponent } from './components/store/products/products-control-panel/products-control-panel.component';
import { LineCategoryComponent } from './components/store/products/widgets/line-category/line-category.component';


@NgModule({
  //todo separate on several modules
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
    LineCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

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
