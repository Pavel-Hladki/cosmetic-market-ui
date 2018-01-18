import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemGridComponent } from './product-item-grid.component';

describe('ProductItemGridComponent', () => {
  let component: ProductItemGridComponent;
  let fixture: ComponentFixture<ProductItemGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
