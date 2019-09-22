import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsControlPanelComponent } from './products-control-panel.component';

describe('ProductsControlPanelComponent', () => {
  let component: ProductsControlPanelComponent;
  let fixture: ComponentFixture<ProductsControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
