import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {defaultIfNull} from "../../../../utils/utils";

@Component({
  selector: 'app-products-control-panel',
  templateUrl: './products-control-panel.component.html',
  styleUrls: ['./products-control-panel.component.css']
})
export class ProductsControlPanelComponent implements OnInit {

  @Input() startItemsIndex: number = 0;
  @Input() endItemsIndex: number = 0;
  @Input() itemsCount: number = 0;

  @Input('sortOptions') sortOptions: SortOption[] = [
    {id: 'name', name: 'Name'},
    {id: 'category', name: 'Category'},
    {id: 'newItem', name: 'New Item'}
  ];

  @Input('sortOption') selectedSortOption: string = 'name';
  @Output() onSelectSortOption = new EventEmitter<string>();


  @Input('viewType') selectedViewType: ViewType = ViewType.GRID;
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

  selectSortOption(sortOptionId: string): void {
    if(!this.isSelectedSortOption(sortOptionId)) {
      this.selectedSortOption = sortOptionId;
      this.onSelectSortOption.emit(sortOptionId);
    }
  }

  isSelectedViewType(type: ViewType): boolean {
    return this.selectedViewType === type;
  }

  isSelectedSortOption(sortOptionId: string) {
    return this.selectedSortOption === sortOptionId
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
  GRID
}
