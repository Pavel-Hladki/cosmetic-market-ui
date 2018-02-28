import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input("collectionSize") collectionSize: number = 90;
  @Input("pageSize") pageSize: number = 30;
  @Input("page") _page: number = 1;

  @Output() onPageSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  get page() {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
    this.onPageSelect.emit(value);
  }

}
