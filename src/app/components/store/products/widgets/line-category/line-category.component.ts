import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-products-line-category-widget',
  templateUrl: './line-category.component.html',
  styleUrls: ['./line-category.component.css'],
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

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(): void {
    this.collapse = this.collapse === 'open' ? 'closed' : 'open';
  }

  isOpened(): boolean {
    return this.collapse === 'open';
  }
}
