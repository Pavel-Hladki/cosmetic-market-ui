import { Component, OnInit } from '@angular/core';
import { Platform } from "./social-sharing/social-sharing.component";

@Component({
  selector: 'app-product-info-block',
  templateUrl: './product-info-block.component.html',
  styleUrls: ['./product-info-block.component.css']
})
export class ProductInfoComponent implements OnInit {

  sharingPlatforms: Platform[] = [Platform.FACEBOOK, Platform.TWITTER, Platform.PINTEREST, Platform.GOOGLE_PLUS]

  constructor() { }

  ngOnInit() {
  }

}
