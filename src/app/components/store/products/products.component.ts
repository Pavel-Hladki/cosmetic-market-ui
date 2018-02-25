import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { ProductService, FilterParams } from '../../../services/product.service';
import { ViewType } from "./products-control-panel/products-control-panel.component";
import {defaultIfNull} from "../../../utils/utils";

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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.filterState = JSON.parse(sessionStorage.getItem("productFilter"));
    if (!this.filterState) {
      this.filterState = new FilterState();
      this.syncStorageFilter();
    }

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

  selectViewType(viewType: ViewType): void {
      this.selectedViewType = viewType;
      this.pageSize = viewType === ViewType.GRID ? 30 : 15;
      this.getProducts();
      localStorage.setItem("viewType", ViewType[viewType]);
  }

  selectSortOption(sortOptionName: string): void {
    this.filterState.sortField = sortOptionName;
    this.updateProductList();
  }

  selectCategories(categoryIds: number[]): void {
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

  private calculatePageItemIndex(page: number): number {
    return (page - 1) * this.pageSize;
  }

  private syncStorageFilter() {
    sessionStorage.setItem("productFilter", JSON.stringify(this.filterState));
  }

  private updateProductList() {
    this.getProducts();
    this.syncStorageFilter();
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
  public categoryIds: number[];
  public searchTerm: string;
  public sortField: string = 'name';
  public sortOrder: string;

  constructor() {}
}
