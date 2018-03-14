import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {ProductCategory} from "../models/product-category";
import {BaseService} from "./base.service";
import {environment} from "../../environments/environment";

@Injectable()
export class CategoryService extends BaseService {

  private categoriesUrl = environment.apiBaseUrl + '/product/aloe/categories';// URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.categoriesUrl)
      .pipe(
        tap(categoryCounts => this.log(`fetched category`)),
        catchError(this.handleError('getCategories', []))
      );
  }

}
