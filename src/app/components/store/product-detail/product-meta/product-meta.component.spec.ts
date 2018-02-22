import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMetaComponent } from './product-meta.component';

describe('ProductMetaComponent', () => {
  let component: ProductMetaComponent;
  let fixture: ComponentFixture<ProductMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
