import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class ScrollService {

  constructor() { }

  public isElementInView(selectorId: string, fullyInView: boolean) {
    const $element = $('#' + selectorId);
    if ($element.length) {
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
