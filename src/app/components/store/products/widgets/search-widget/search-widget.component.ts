import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../../models/product";
import {ProductService} from "../../../../../services/product.service";
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {

  products$: Observable<Product[]>;
  loading: boolean = false;
  searchField: FormControl;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.products$ = this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.productService.searchProducts(term))
      .do(_ => this.loading = false)
  }

}
