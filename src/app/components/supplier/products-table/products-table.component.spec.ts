import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsListComponent } from './products-table.component';

describe('UserProductsListComponent', () => {
  let component: UserProductsListComponent;
  let fixture: ComponentFixture<UserProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
