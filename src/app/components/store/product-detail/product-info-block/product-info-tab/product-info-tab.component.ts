import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-product-info-tab',
  templateUrl: './product-info-tab.component.html',
  styleUrls: ['./product-info-tab.component.css'],
  animations: [
    trigger('collapse', [
      state('true', style({
        opacity: '1',
        height: '*',
        display: 'block'
      })),
      state('false',   style({
        opacity: '0',
        height: '0',
        display: 'none'
      })),
      transition('false => true', animate('600ms ease-in')),
      transition('true => false', animate('300ms ease-out'))
    ])
  ]
})
export class ProductInfoTabComponent implements OnInit {

  @Input() infoTabs: InfoTab[];

  activeTabIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  openTab(tabIndex: number): void {
    this.activeTabIndex = tabIndex;
  }

}

export class InfoTab {
  constructor(
    public name: string,
    public content: string
  ) {}
}
