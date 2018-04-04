import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Product } from '../../../models/product'

import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from "../../../services/product.service";
import {ProductImageSliderComponent} from "./product-image-slider/product-image-slider.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('imageSlider') imageSlider: ProductImageSliderComponent;

  @Input() product: Product;
  imageUrls: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getProduct();
      }
    });

    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.imageUrls = [];
        this.imageUrls.push(product.mainImage, ...product.otherImages);
        if(this.imageSlider) {
          this.imageSlider.setActiveImage(product.mainImage);
        }
      });
  }

  getBreadcrumbName() {
    return this.product.name.charAt(0).toUpperCase() + this.product.name.slice(1).toLowerCase();
  }

  goBack(): void {
    this.location.back();
  }
}
