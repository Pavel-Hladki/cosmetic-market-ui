import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app.component';
import { ProductsComponent } from './components/store/products/products.component';
import { ProductDetailComponent } from './components/store/product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Logger } from './services/logger.service';
import { StoreComponent } from './components/store/store.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductSearchComponent } from './components/shared/product-search/product-search.component';
import { ProductsItemComponent } from './components/store/products/products-item/products-item.component';
import { PaginationComponent } from './components/store/shared/pagination/pagination.component';
import { ProductsControlPanelComponent } from './components/store/products/products-control-panel/products-control-panel.component';
import { LineCategoryComponent } from './components/store/products/widgets/line-category-widget/line-category-widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ProductsTableComponent } from './components/supplier/products-table/products-table.component';
import { AccountNavigationComponent } from './components/supplier/account-navigation/account-navigation.component';
import { ProductRecordComponent } from './components/supplier/products-table/product-record/product-record.component';
import { ProductFormComponent } from './components/supplier/product-form/product-form.component';
import { SearchWidgetComponent } from './components/store/products/widgets/search-widget/search-widget.component';
import { ProductItemGridComponent } from './components/store/products/products-item/product-item-grid/product-item-grid.component';
import { ProductItemListComponent } from './components/store/products/products-item/product-item-list/product-item-list.component';
import { ProductRatingsComponent } from './components/shared/product-ratings/product-ratings.component';
import { ProductImageSliderComponent } from './components/store/product-detail/product-image-slider/product-image-slider.component';
import { ProductInfoComponent } from './components/store/product-detail/product-info-block/product-info-block.component';
import { ProductReviewComponent } from './components/store/product-detail/product-review/product-review.component';
import { ProductMetaComponent } from './components/store/product-detail/product-meta/product-meta.component';
import { ProductCommentComponent } from './components/store/product-detail/product-review/product-comment/product-comment.component';
import { ReviewFormComponent } from './components/store/product-detail/product-review/review-form/review-form.component';
import { ProductInfoTabComponent } from './components/store/product-detail/product-info-block/product-info-tab/product-info-tab.component';
import { SocialSharingComponent } from './components/store/product-detail/product-info-block/social-sharing/social-sharing.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactUsComponent } from './components/shared/contact-us/contact-us.component';
import { ProductActionsComponent } from './components/store/shared/product-actions/product-actions.component';
import { ProductsBreadcrumbComponent } from './components/store/products/products-breadcrumb/products-breadcrumb.component';
import { CategoryService } from "./services/category.service";
import { WidgetsComponent } from './components/store/products/widgets/widgets.component';
import { BestsellersComponent } from './components/dashboard/bestsellers/bestsellers.component';
import { SetsComponent } from './components/dashboard/sets/sets.component';
import { StockComponent } from './components/dashboard/stock/stock.component';
import {DashboardService} from './services/dashboard.service';
import {ScrollService} from "./services/scroll.service";

@NgModule({
  //todo separate on several modules
  //todo rename app components after, delete prefix e.g. products-item -> item or item-block
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    DashboardComponent,
    BestsellersComponent,
    SetsComponent,
    StockComponent,
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
    SearchWidgetComponent,
    ProductItemGridComponent,
    ProductItemListComponent,
    ProductRatingsComponent,
    ProductImageSliderComponent,
    ProductInfoComponent,
    ProductReviewComponent,
    ProductMetaComponent,
    ProductCommentComponent,
    ReviewFormComponent,
    ProductInfoTabComponent,
    SocialSharingComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ProductActionsComponent,
    ProductsBreadcrumbComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragScrollModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
     /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),*/
    NgbModule.forRoot()
  ],
  providers: [ProductService, CategoryService, Logger, DashboardService, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//todo thing about lazy-loading of modules
//todo sanitize all resources
