import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { ProductService } from '../../../services/product.service';
import { ViewType } from "./products-control-panel/products-control-panel.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedSortOptionId: string;
  selectedViewType: ViewType = ViewType.GRID;

  readonly viewType = ViewType;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  selectSortOption(sortOptionId: string): void {
    this.selectedSortOptionId = sortOptionId;
  }

  selectViewType(viewType: ViewType): void {
    this.selectedViewType = viewType;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(_ => {
        this.products = this.products.filter(p => p !== product)
      });
  }
}
