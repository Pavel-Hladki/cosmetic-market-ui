import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdictListItemComponent } from './product-record.component';

describe('ProdictListItemComponent', () => {
  let component: ProdictListItemComponent;
  let fixture: ComponentFixture<ProdictListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdictListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdictListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
