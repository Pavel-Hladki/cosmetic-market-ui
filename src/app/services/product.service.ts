import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Product } from '../models/product';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import {httpOptions} from "./http.options";
import {BaseService} from "./base.service";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService extends BaseService {

  private productsUrl = environment.apiBaseUrl + '/product/aloe';  // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  getProducts(params?: FilterParams): Observable<Product[]> {
    const httpParams: HttpParams = params && params.toHttpParams();
    return this.http.get<Product[]>(this.productsUrl + '/search', {params: httpParams})
      .pipe(
        tap(products => this.log(`fetched products`)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${_.id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /** POST: add a new product to the server */
  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((product: Product) => this.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  /** PUT: update the product on the server */
  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /** DELETE: delete the product from the server */
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  /** GET products whose name contains search term */
  autocompleteName(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    return this.http.get<(Product)[]>(`${this.productsUrl}/all`)
      .map(products => products.filter(product => product.name.includes(term)))
      .do(_ => this.log(`found products matching "${term}"`))
      .catch(this.handleError<Product[]>('autocompleteName', []))
  }
}


export class FilterParams {

  constructor(public page: number,
              public pageSize: number,
              public categoryIds: number[] = [],
              public searchTerm: string,
              public sortField: string,
              public sortOrder: string
  ) {}

  public toHttpParams(): HttpParams {
    const params  = new HttpParams();
    this.searchTerm && params.set("term", this.searchTerm);
    this.page && params.set("page", String(this.page));
    this.pageSize && params.set("pageSize", String(this.pageSize));
    //todo refactor to support several filters
    this.categoryIds && params.set("filter", `category[${this.categoryIds[0]}]`);
    this.sortField && params.set("sort", `${this.sortField}[${this.sortOrder}]`);


    //this.categoryIds.forEach(categoryId => params
    //  .append("categoryIds", String(categoryId)));
    return params;
  }
}
