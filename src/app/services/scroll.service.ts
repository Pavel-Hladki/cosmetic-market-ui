import { Injectable } from '@angular/core';
import {isDefined} from "../utils/utils";

declare var $: any;

@Injectable()
export class ScrollService {

  constructor() { }

  public isElementInView(element: any, fullyInView: boolean) {
    const $element = $(element);
    if($element.length) {
      const pageTop = $(window).scrollTop();
      const pageBottom = pageTop + $(window).height();
      const elementTop = $element.offset().top;
      const elementBottom = elementTop + $element.height();

      if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
      } else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
      }
    }
    return false;
  }
}
