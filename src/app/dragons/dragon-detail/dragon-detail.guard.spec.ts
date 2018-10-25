import { TestBed, async, inject } from '@angular/core/testing';

import { DragonDetailGuard } from './dragon-detail.guard';

describe('ProductDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonDetailGuard]
    });
  });

  it('should ...', inject([DragonDetailGuard], (guard: DragonDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
