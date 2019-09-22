import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {CategoryCount} from "../models/product-category";
import {BaseService} from "./base.service";

@Injectable()
export class CategoryService extends BaseService {

  private categoryCountsUrl = 'api/categoriesCount';  // URL to web api
  private categoriesUrl = 'api/categories';  // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  getCategoryCounts(): Observable<CategoryCount[]> {
    return this.http.get<CategoryCount[]>(this.categoryCountsUrl)
      .pipe(
        tap(categoryCounts => this.log(`fetched category counts`)),
        catchError(this.handleError('getCategoryCounts', []))
      );
  }

}
