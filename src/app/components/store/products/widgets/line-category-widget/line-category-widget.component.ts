import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CategoryCount} from "../../../../../models/product-category";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-products-line-category-widget',
  templateUrl: './line-category-widget.component.html',
  styleUrls: ['./line-category-widget.component.css'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        height: '*',
        display: 'block'
      })),
      state('closed',   style({
        opacity: '0',
        height: '0',
        display: 'none'
      })),
      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('500ms ease-out'))
    ])
  ]
})
export class LineCategoryComponent implements OnInit {

  collapse: string = 'open';

  categoryCountList: CategoryCount[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategoriesCount();
  }

  getCategoriesCount(): void {
    this.categoryService.getCategoryCounts()
      .subscribe(categoryCountList => this.categoryCountList = categoryCountList);
  }

  toggleCollapse(): void {
    this.collapse = this.collapse === 'open' ? 'closed' : 'open';
  }

  isOpened(): boolean {
    return this.collapse === 'open';
  }
}
