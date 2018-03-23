import { Injectable } from '@angular/core';

declare var $: any;
declare var window: any;

@Injectable()
export class VideoService {

  constructor() { }

  public putVideo(selectorId: string, fullVideoName: string, mobileVideoName: string) {
    const mp4 = $(window).width() < 431 ? mobileVideoName : fullVideoName;
    $('#' + selectorId).vide({
      mp4: 'assets/video/' + mp4,
      poster: 'assets/img/bg-fallback-1.png'
    }, {
      posterType: 'png'
    });
    $('video[autoplay]').each(function() {
      console.log('play video');
      window.enableInlineVideo(this, {
        iPad: true
      });
      this.play();
    });
  }
}
