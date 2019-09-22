import { Component, OnInit } from '@angular/core';
import {ProductsItemComponent} from "../products-item.component";

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['../products-item.component.css', './product-item-list.component.css']
})
export class ProductItemListComponent extends ProductsItemComponent {

  ngOnInit() {
  }

}
