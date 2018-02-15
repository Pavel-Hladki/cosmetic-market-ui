import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-products-item',
  template: '<div>{{product}}</div>',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product: Product;

  ngOnInit() {
  }

}
