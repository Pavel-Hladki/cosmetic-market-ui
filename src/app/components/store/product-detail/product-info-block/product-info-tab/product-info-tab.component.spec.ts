import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoTabComponent } from './product-info-tab.component';

describe('ProductInfoTabComponent', () => {
  let component: ProductInfoTabComponent;
  let fixture: ComponentFixture<ProductInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
