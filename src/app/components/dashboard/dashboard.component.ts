import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {VideoService} from '../../services/video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private videoService: VideoService) { }

  ngOnInit() {
    this.videoService
      .putVideo('intro', 'ALOE_PLUS_LANZAROTE_desktop.mp4', 'ALOE_PLUS_LANZAROTE_small.mp4');
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(1, 5));
  }
}
