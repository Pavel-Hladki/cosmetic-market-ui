import {Component, OnInit, ViewChild} from '@angular/core';
import {DragScrollDirective} from 'ngx-drag-scroll';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.css']
})
export class ProductImageSliderComponent implements OnInit {

  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;

  mainImage: string;

  imageList: string[] = [
    'assets/img/product/2.jpg',
    'assets/img/product/3.jpg',
    'assets/img/product/4.jpg',
    'assets/img/product/5.jpg' ,
    'assets/img/product/6.jpg',
    'assets/img/product/7.jpg'
  ];

  leftNavDisabled = false;
  rightNavDisabled = false;

  constructor() { }

  ngOnInit() {
    this.mainImage = this.imageList[0];
  }

  clickItem(item: string): void {
    this.mainImage = item;
  }

  moveLeft(): void {
    this.ds.moveLeft();
  }

  moveRight(): void {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }
}
