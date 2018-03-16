import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { ProductService, FilterParams } from '../../../services/product.service';
import { ViewType } from "./products-control-panel/products-control-panel.component";
import {defaultIfNull, isDefined} from "../../../utils/utils";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

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
    return this.filterState.searchTerm != null;
  }

  selectViewType(viewType: ViewType): void {
      this.selectedViewType = viewType;
      this.pageSize = viewType === ViewType.GRID ? 30 : 15;
      this.getProducts();
      localStorage.setItem("viewType", ViewType[viewType]);
  }

  selectSortOption(sortOptionName: string): void {
    this.filterState.sortField = sortOptionName;
    this.filterState.sortOrder = 'ASC';
    this.updateProductList();
  }

  selectCategories(categoryIds: string[]): void {
    this.filterState.categoryIds = categoryIds;
    this.updateProductList();
  }

  selectTerm(term: string): void {
    this.filterState.searchTerm = term;
    this.updateProductList();
  }

  selectPage(page: number) {
    this.filterState.page = page;
    this.updateProductList();
  };

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
        this.filterState.categoryIds, this.filterState.searchTerm,
        this.filterState.sortField, this.filterState.sortOrder);
  }
}

class FilterState {
  public page: number = 1;
  public categoryIds: string[];
  public searchTerm: string;
  public sortField: string = 'name';
  public sortOrder: string = 'ASC';

  constructor(paramMap: ParamMap) {
    this.fromParamMap(paramMap)
  }

  public toUrlParams(): string {
    return ((isDefined(this.searchTerm) && this.searchTerm.length > 0 ? `&term=${this.searchTerm}` : '')
      + ((this.page > 1) ? `&page=${this.page}` : '')
      + ((this.categoryIds.length > 0 ) ? `&filter=category[${this.categoryIds.join(",")}]` : '')
      +`&sort=${this.sortField}[${this.sortOrder}]`)
      .replace('&', '?');
  }

  private fromParamMap(paramMap: ParamMap) {
    this.page = +paramMap.get('page') || 1;
    this.searchTerm = paramMap.get('term');
    this.categoryIds = paramMap.get('filter') &&
      paramMap.get('filter').replace('category[', '')
      .replace(']', '')
      .split(',')
      .map(category => category.trim()) || [];

    const sortValue = paramMap.get('sort');
    this.sortField = sortValue && sortValue.substring(0, sortValue.indexOf('[')) || 'name';
    this.sortOrder = sortValue && sortValue
      .replace(this.sortField + '[', '')
      .replace(']', '') || 'ASC';
  }
}
