import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DashboardService} from '../../../services/dashboard.service';
import {Product} from "../../../models/product";

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  _products: Product[] = [];

  productsInitialized: boolean = false;

  constructor(private dashboardService: DashboardService ) { }

  ngOnInit() {
  }

  get products() {
    return this._products;
  }

  @Input()
  set products(products: Product[]) {
    if(!this.productsInitialized && products.length > 0) {
      this._products = products;
      this.productsInitialized = true;
      setTimeout(() => this.dashboardService
        .runCarousel('products-slider'));
    }
  }
}
