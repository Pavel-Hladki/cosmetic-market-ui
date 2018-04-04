import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../../../../../models/product";
import {ProductService} from "../../../../../services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {

  @Input() _term: string;
  @Output() onTermSelect = new EventEmitter<string>();

  @ViewChild('searchButton') searchButtonEl: ElementRef;

  searchForm: FormGroup;

  products$: Observable<Product[]>;
  loading: boolean = false;
  searchFocused: boolean = false;
  searchResultHovered: boolean = false;

  constructor(private productService: ProductService,
              private fb: FormBuilder) {
  }

  @Input()
  set term(term: string) {
    this._term = term;
    if(this.searchField) {
      this.searchField.setValue(term);
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.products$ = this.searchField.valueChanges
      .startWith(this._term || '')
      .debounceTime(300)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => {
        if (3 > term.length) return of([]);
        return this.productService.autocompleteName(term);
      })
      .do(_ => this.loading = false);
  }

  get searchField() {
    return this.searchForm && this.searchForm.get('searchField') || null;
  }

  isSearchFocused(): boolean {
    return this.searchFocused || this.searchResultHovered;
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.searchButtonEl.nativeElement.focus();
      this.onTermSelect.emit(this.searchForm.value.searchField);
    }
  }

  onSearchFieldFocus() {
    this.searchFocused = true;
  }

  onSearchFieldBlur() {
    this.searchFocused = false;
  }

  onSearchResultHover() {
    this.searchResultHovered = true;
  }

  onSearchResultLeave() {
    this.searchResultHovered = false;
  }

  private createForm() {
    this.searchForm = this.fb.group({
      searchField: [this._term || '', Validators.minLength(3)]
    });
  }
}
