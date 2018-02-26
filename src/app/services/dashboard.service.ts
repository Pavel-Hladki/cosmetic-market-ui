import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class DashboardService{

  constructor() { }

  public runCarousel(element){
    $('#' + element).owlCarousel({
      center: true,
      loop: true,
      items:6,
      margin: 20,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  }
}
