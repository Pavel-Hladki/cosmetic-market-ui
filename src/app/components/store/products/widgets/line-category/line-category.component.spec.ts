import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCategoryComponent } from './line-category.component';

describe('LineCategoryComponent', () => {
  let component: LineCategoryComponent;
  let fixture: ComponentFixture<LineCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
