import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../../../services/scroll.service";
import {isDefined} from "../../../utils/utils";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../models/product";
import {Observable} from "rxjs/Rx";
import {of} from "rxjs/observable/of";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//todo make search input directive/component
export class HeaderComponent implements OnInit {

  readonly logoType = Logo;

  private activeItem: string = 'main';
  private logo: Logo = Logo.WHITE_LOGO;

  searchForm: FormGroup;

  products$: Observable<Product[]>;
  loading: boolean = false;
  searchFocused: boolean = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private scrollService: ScrollService,
              private productService: ProductService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe(value => {
        this.setLogoOnInit(value);
        this.setActiveItemOnInit(value);
      });

    this.createForm();
    this.products$ = this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => {
        if (3 > term.length) return of([]);
        return this.productService.autocompleteName(term);
      })
      .do(_ => this.loading = false);
  }

  get searchField() {
    return this.searchForm.get('searchField');
  }

  isSearchFocused(): boolean {
    return this.searchFocused;
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.router.navigate(['/products'], { queryParams: { term: this.searchForm.value.searchField } });
    }
  }
  onSearchFieldFocus() {
    this.searchFocused = true;
  }

  onSearchFieldBlur() {
    this.searchFocused = false;
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


  private createForm() {
    this.searchForm = this.fb.group({
      searchField: ['', Validators.minLength(3)]
    });
  }
}

enum Logo {
  GREEN_LOGO,
  WHITE_LOGO
}
