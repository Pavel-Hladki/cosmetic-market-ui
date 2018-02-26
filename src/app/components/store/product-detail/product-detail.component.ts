import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  imageUrls: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.imageUrls = [];
        this.imageUrls.push(product.mainImage, ...product.otherImages);
      });
  }

  getBreadcrumbName() {
    return this.product.name.charAt(0).toUpperCase() + this.product.name.slice(1).toLowerCase();
  }

  goBack(): void {
    this.location.back();
  }
}
