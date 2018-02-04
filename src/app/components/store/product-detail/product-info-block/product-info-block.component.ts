import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductDescription} from "../../../../models/product";
import {InfoTab} from "./product-info-tab/product-info-tab.component";

@Component({
  selector: 'app-product-info-block',
  templateUrl: './product-info-block.component.html',
  styleUrls: ['./product-info-block.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: Product;

  infoTabs: InfoTab[] = [];

  constructor() { }

  ngOnInit() {
    this.prepareInfoTabs();
  }

  private prepareInfoTabs(): void {
    this.pushIfDefined('Details',
      this.product.description.details);
    this.pushIfDefined('Active Ingredients',
      this.product.description.activeIngredients);
    this.pushIfDefined('Properties',
      this.product.description.properties);
    this.pushIfDefined('Directions',
      this.product.description.directions)
  }

  private pushIfDefined(name: string, content: string): void {
    if(content != null) {
      this.infoTabs.push({name, content});
    }
  }
}
