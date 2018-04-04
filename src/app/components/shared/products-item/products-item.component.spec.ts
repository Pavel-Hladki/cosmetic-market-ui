import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsItemComponent } from './products-item.component';

describe('ProductsItemComponent', () => {
  let component: ProductsItemComponent;
  let fixture: ComponentFixture<ProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
