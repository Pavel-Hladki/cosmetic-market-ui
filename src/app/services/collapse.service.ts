import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class CollapseService {

  constructor() { }

  public collapseElement(selector: string, toState: CollapseState, options?: any) {
    if(options && $(window).width() < options.maxScreenWidth) {
      $(selector).collapse(toState.toString().toLowerCase());
    }
  }

}

export enum CollapseState {
  SHOW = 'show',
  HIDE = 'hide',
  TOGGLE = 'toogle'
}
