import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
///todo add ?q="term" param to url and read from
//todo rename to filter-widgets
//todo reload counts on term change, any change
//todo here place load counts service
export class WidgetsComponent implements OnInit {

  @Input() categoryIds: number[];
  @Input() searchTerm: string;

  //todo think how to unite into one object if widgets get a lot
  @Output() onTermSelect = new EventEmitter<string>();
  @Output() onCategoriesChange = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }

  selectTerm(term: string) {
    this.searchTerm = term;
    this.selectCategories([]);
  }

  selectCategories(categoryIds: number[]) {
    this.categoryIds = categoryIds;
    this.onCategoriesChange.emit(categoryIds);
  }

}
