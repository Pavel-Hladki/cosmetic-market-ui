import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DragScrollDirective} from 'ngx-drag-scroll';

@Component({
  selector: 'app-product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.css']
})
export class ProductImageSliderComponent implements OnInit {

  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;



  @Input("defaultImage") mainImage: string = 'assets/img/product/11.jpg';
  mainImageIndex: number = 0;

  @Input("imageUrls") imageList: string[];

  leftNavDisabled = false;
  rightNavDisabled = false;

  constructor() { }

  ngOnInit() {
    this.initSlider();
  }

  initSlider(): void {
    if(this.isNotEmptyImageList()) {
      this.mainImage = this.imageList[this.mainImageIndex];
    }
  }

  clickItem(mainImageIndex: number): void {
    this.mainImageIndex = mainImageIndex;
    this.mainImage = this.imageList[mainImageIndex];
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

  isNotEmptyImageList(): boolean {
    return this.imageList && 0 < this.imageList.length;
  }
}
