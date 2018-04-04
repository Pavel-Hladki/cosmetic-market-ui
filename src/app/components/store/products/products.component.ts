import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { ProductService, FilterParams } from '../../../services/product.service';
import { ViewType } from "./products-control-panel/products-control-panel.component";
import {defaultIfNull, isDefined} from "../../../utils/utils";
import {Location} from "@angular/common";
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from "@angular/router";
import {WidgetsState} from "./widgets/widgets.component";

declare var window: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filterState: FilterState;

  productsTotalCount: number;
  pageSize: number = 30;

  selectedViewType: ViewType;

  products: Product[];
  loading: boolean = false;

  readonly viewType = ViewType;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initFromUrl();
      }
    });

    this.initFromUrl();

    this.selectedViewType = ViewType[localStorage.getItem("viewType")];
    this.selectViewType(defaultIfNull(this.selectedViewType, ViewType.GRID));
  }

  getProducts(): void {
    this.productService.getProducts(this.buildFilterParams())
      .do(_ => this.loading = true)
      .subscribe(products => {
        this.products = products;
        this.productsTotalCount = this.products.length;
        this.loading = false});
  }

  getStartItemIndex(): number {
    return this.calculatePageItemIndex(this.filterState.page) + 1;
  }

  getEndItemIndex(): number {
    let nextPageItemIndex = this.calculatePageItemIndex(this.filterState.page + 1);

    return nextPageItemIndex > this.productsTotalCount
      ? this.productsTotalCount : nextPageItemIndex
  }

  isSearch() {
    return isDefined(this.filterState.widgetsState.searchTerm)
      && this.filterState.widgetsState.searchTerm.length > 0;
  }

  selectViewType(viewType: ViewType): void {
    if(this.selectedViewType != viewType) {
      this.selectedViewType = viewType;
      this.pageSize = viewType === ViewType.GRID ? 30 : 15;
      this.getProducts();
      localStorage.setItem("viewType", ViewType[viewType]);
    }
  }

  selectSortOption(sortOptionName: string): void {
    this.filterState.sortOrder = 'ASC';
    if(this.filterState.sortField != sortOptionName) {
      this.filterState.sortField = sortOptionName;
      this.updateProductList();
    }
  }

  setWidgetsState(state: WidgetsState) {
    this.filterState.widgetsState = state;
    this.updateProductList();
  }

  selectPage(page: number) {
    if(this.filterState.page != page) {
      this.filterState.page = page;
      this.updateProductList();
    }
  }

  trackProductFn(index, product: Product) {
    return product ? product.id : null;
  }

  private initFromUrl() {
    this.filterState = new FilterState(this.route.snapshot.queryParamMap);
  }

  private calculatePageItemIndex(page: number): number {
    return (page - 1) * this.pageSize;
  }

  private syncUrlParams() {
    this.location.replaceState(window.location.pathname + this.filterState.toUrlParams());
  }

  private updateProductList() {
    this.syncUrlParams();
    this.getProducts();
  }

  private buildFilterParams(): FilterParams {
      return new FilterParams(
        this.filterState.page, this.pageSize,
        this.filterState.widgetsState.categoryIds, this.filterState.widgetsState.searchTerm,
        this.filterState.sortField, this.filterState.sortOrder);
  }
}

class FilterState {
  public page: number = 1;
  public widgetsState: WidgetsState = new WidgetsState();
  public sortField: string = 'name';
  public sortOrder: string = 'ASC';

  constructor(paramMap: ParamMap) {
    this.fromParamMap(paramMap);
  }

  public toUrlParams(): string {
    return (this.widgetsState.toUrlParams()
      + ((this.page > 1) ? `&page=${this.page}` : '')
      +`&sort=${this.sortField}[${this.sortOrder}]`)
      .replace('&', '?');
  }

  private fromParamMap(paramMap: ParamMap) {
    this.page = +paramMap.get('page') || 1;
    const sortValue = paramMap.get('sort');
    this.sortField = sortValue && sortValue.substring(0, sortValue.indexOf('[')) || 'name';
    this.sortOrder = sortValue && sortValue
      .replace(this.sortField + '[', '')
      .replace(']', '') || 'ASC';

    return this;
  }
}
