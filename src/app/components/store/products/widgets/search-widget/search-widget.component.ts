import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../../models/product";
import {ProductService} from "../../../../../services/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {

  @Input() term: String;
  @Output() onTermSelect = new EventEmitter<string>();

  searchForm: FormGroup;

  products$: Observable<Product[]>;
  loading: boolean = false;

  constructor(private productService: ProductService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.products$ = this.searchField.valueChanges
      .filter(value => value.length > 2)
      .debounceTime(300)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.productService.autocompleteName(term))
      .do(_ => this.loading = false)
  }

  get searchField() {
    return this.searchForm.get('searchField');
  }

  onSubmit(): void {
    if(this.searchForm.valid && this.searchForm.value.searchField !== this.term) {
      this.onTermSelect.emit(this.searchForm.value.searchField);
    }
  }

  private createForm() {
    this.searchForm = this.fb.group({
      searchField: [this.term || '', Validators.minLength(3)]
    });
  }
}
