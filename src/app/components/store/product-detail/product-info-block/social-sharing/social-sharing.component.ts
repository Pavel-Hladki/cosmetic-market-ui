import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.component.html',
  styleUrls: ['./social-sharing.component.css']
})
export class SocialSharingComponent implements OnInit {

  @Input() sharedUrl: string;
  @Input() platforms: Platform[] = [Platform.FACEBOOK, Platform.TWITTER, Platform.PINTEREST, Platform.GOOGLE_PLUS];

  sharingList: ShareMeta[] = [];

  private socialSharingMap = {
    facebook: {
      title: "Facebook",
      cssClasses: "zmdi zmdi-facebook",
      urlBuilder: this.urlBuilder
    },
    twitter: {
      title: "Twiter",
      cssClasses: "zmdi zmdi-twitter",
      urlBuilder: this.urlBuilder
    },
    googlePlus: {
      title: "Google Plus",
      cssClasses: "zmdi zmdi-google-plus",
      urlBuilder: this.urlBuilder
    },
    pinterest: {
      title: "Pinterest",
      cssClasses: "zmdi zmdi-pinterest",
      urlBuilder: this.urlBuilder
    },
    vkontakte: {
        title: "Vkontakte",
        cssClasses: "zmdi zmdi-vkontakte",
        urlBuilder: this.urlBuilder
    },
  };

  constructor() { }

  ngOnInit() {
    for (let platform of this.platforms) {
      let socialSharing = this.socialSharingMap[platform];
      this.sharingList.push({
        title: socialSharing.title,
        cssClasses: socialSharing.cssClasses,
        url: socialSharing.urlBuilder(this.sharedUrl).build()})
    }
  }

  private urlBuilder(sharedUrl: string) {
    return {build: () => sharedUrl};
  }
}

export enum Platform {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  GOOGLE_PLUS = 'googlePlus',
  PINTEREST = 'pinterest',
  V_KONTAKTE = 'vkontakte'
}

class ShareMeta {
  constructor(
    public title: string,
    public cssClasses: string,
    public url: string
  ) {}
}
