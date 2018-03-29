import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {ProductCategory} from "../../../../models/product-category";
import {isDefined} from "../../../../utils/utils";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

//todo rename to filter-widgets
//todo reload counts on term change, any change
export class WidgetsComponent implements OnInit {

  widgetsState: WidgetsState = new WidgetsState();
  @Output() onStateChanged = new EventEmitter<WidgetsState>();

  categoryList: ProductCategory[];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categoryList => {
        this.categoryList = categoryList;
        this.initFromUrl(categoryList);
      });
  }

  selectTerm(term: string) {
    if(this.widgetsState.searchTerm != term) {
      this.widgetsState.searchTerm = term;
      this.emitStateChanged();
    }
  }

  selectCategories(categoryIds: number[]) {
    if(this.widgetsState.categoryIds != categoryIds) {
      this.widgetsState.categoryIds = categoryIds;
      this.emitStateChanged();
    }
  }

  private initFromUrl(categoryList: ProductCategory[]) {
    this.widgetsState = WidgetsState.createFrom(this.route.snapshot.queryParamMap, categoryList);
    this.emitStateChanged();
  }

  private emitStateChanged() {
    this.onStateChanged.emit(this.widgetsState);
  }
}

export class WidgetsState {
  public searchTerm: string;
  private _categoryIds: number[] = [];
  private categoryNames: string[] = [];
  private categoryList: ProductCategory[] = [];

  constructor() {
  }

  public toUrlParams(): string {
    return ((isDefined(this.searchTerm) && this.searchTerm.length > 0 ? `&term=${this.searchTerm}` : '')
      + ((this.categoryNames.length > 0 ) ? `&filter=category[${this.categoryNames.join(",")}]` : ''))
      .replace('&', '?');
  }

  static createFrom(paramMap: ParamMap, categoryList: ProductCategory[]): WidgetsState  {
    const state = new WidgetsState();
    state.initFrom(paramMap, categoryList);
    return state;
  }

  get categoryIds(): number[] {
    return this._categoryIds;
  }
  set categoryIds(categoryIds: number[]) {
    this._categoryIds = categoryIds;
    this.categoryNames = this.categoryList
      .filter(category => categoryIds.includes(category.id))
      .map(category => category.name);
  }

  private initFrom(paramMap: ParamMap, categoryList: ProductCategory[]) {
    this.categoryList = categoryList;
    this.searchTerm = paramMap.get('term');
    this.categoryNames = paramMap.get('filter') &&
      paramMap.get('filter').replace('category[', '')
        .replace(']', '')
        .split(',')
        .map(category => category.trim()) || [];

    this.categoryIds =  categoryList
      .filter(category => this.categoryNames.includes(category.name))
      .map(category => category.id);
  }
}

