import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickviewModalComponent } from './quickview-modal.component';

describe('QuickviewModalComponent', () => {
  let component: QuickviewModalComponent;
  let fixture: ComponentFixture<QuickviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
