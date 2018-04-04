import { TestBed, inject } from '@angular/core/testing';

import { CollapseService } from './collapse.service';

describe('CollapseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollapseService]
    });
  });

  it('should be created', inject([CollapseService], (service: CollapseService) => {
    expect(service).toBeTruthy();
  }));
});
