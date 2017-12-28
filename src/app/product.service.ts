import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(PRODUCTS.find(hero => hero.id === id));
  }

}
