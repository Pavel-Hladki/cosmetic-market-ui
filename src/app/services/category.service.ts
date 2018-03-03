import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {CategoryCount} from "../models/product-category";
import {BaseService} from "./base.service";
import {environment} from "../../environments/environment";

@Injectable()
export class CategoryService extends BaseService {

  private categoriesUrl = environment.apiBaseUrl + '/product/aloe/category';// URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  getCategoryCounts(): Observable<CategoryCount[]> {
    return this.http.get<CategoryCount[]>(this.categoriesUrl+ "/count")
      .pipe(
        tap(categoryCounts => this.log(`fetched category counts`)),
        catchError(this.handleError('getCategoryCounts', []))
      );
  }

}
