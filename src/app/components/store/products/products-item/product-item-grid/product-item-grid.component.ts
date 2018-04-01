import { Component } from '@angular/core';
import {ProductsItemComponent} from "../products-item.component";

@Component({
  selector: 'app-product-item-grid',
  templateUrl: './product-item-grid.component.html',
  styleUrls: ['./product-item-grid.component.css']
})
export class ProductItemGridComponent extends ProductsItemComponent {

  ngOnInit() {
  }

}
