import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProductSearchComponent,
    StoreComponent
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
    )
  ],
  providers: [ProductService, MessageService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
//todo thing about lazy-loading of modules
