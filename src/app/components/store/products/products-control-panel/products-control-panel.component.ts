import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-products-control-panel',
  templateUrl: './products-control-panel.component.html',
  styleUrls: ['./products-control-panel.component.css']
})
export class ProductsControlPanelComponent implements OnInit {

  @Input() startItemIndex: number = 0;
  @Input() endItemIndex: number = 0;
  @Input() itemCount: number = 0;

  @Input('sortOptions') sortOptions: SortOption[] = [
    {id: 'name', name: 'Name'},
    {id: 'category', name: 'Category'},
    {id: 'newItem', name: 'New Item'}
  ];
  @Output() onSelectedSortOption = new EventEmitter<string>();
  selectedSortOptionId: string;

  @Input('defaultViewType') selectedViewType: ViewType = ViewType.LIST;
  @Output() onSelectViewType = new EventEmitter<ViewType>();

  readonly viewType = ViewType;

  ngOnInit() {
  }

  selectViewType(type: ViewType): void {
    if(!this.isSelectedViewType(type)) {
      this.selectedViewType = type;
      this.onSelectViewType.emit(type);
    }
  }

  isSelectedViewType(type: ViewType): boolean {
    return this.selectedViewType === type;
  }

  selectSortOption(sortOptionId: string): void {
    if(this.selectedSortOptionId !== sortOptionId) {
      this.onSelectedSortOption.emit(sortOptionId);
      this.selectedSortOptionId = sortOptionId;
    }
  }

}

export class SortOption {
  constructor(
    public id: string,
    public name: string
  ){}
}

export enum ViewType {
  LIST,
  GRIP
}
