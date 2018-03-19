import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../../../services/scroll.service";
import {isDefined} from "../../../utils/utils";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly logoType = Logo;

  private activeItem: string = 'main';
  private logo: Logo = Logo.WHITE_LOGO;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private scrollService: ScrollService) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe(value => {
        this.setLogoOnInit(value);
        this.setActiveItemOnInit(value);
      });
  }

  isCurrentLogo(logo: Logo) {
    return this.logo === logo;
  }

  isItemActive(activeItem: string) {
    return this.activeItem === activeItem;
  }

  private setLogoOnInit(route: ActivatedRoute) {
    const logoParam = this.lookupRouteParam(route, 'logo');

    if(logoParam === 'white_logo') {
      this.logo = Logo.WHITE_LOGO;
    } else {
      this.logo = Logo.GREEN_LOGO;
    }
  }

  private setActiveItemOnInit(route: ActivatedRoute) {
    this.activeItem = this.lookupRouteParam(route, 'menuItem') || 'main';
  }

  private lookupRouteParam(route: ActivatedRoute, param: string): string {
    while (route.firstChild && !isDefined(route.snapshot.data[param])) {
      route = route.firstChild;
    }

    return route.snapshot.data[param];
  }

  @HostListener("window:scroll", []) onScroll() {
    this.changeActiveItemIfVisible('about', 'about');
    this.changeActiveItemIfVisible('intro', 'main');
    this.changeActiveItemIfVisible('contact', 'contact');
  }

  private changeActiveItemIfVisible(elementId: string, item: string) {
    this.activeItem = this.scrollService
      .isElementInView(elementId, false) ? item : this.activeItem;
  }
}

enum Logo {
  GREEN_LOGO,
  WHITE_LOGO
}
