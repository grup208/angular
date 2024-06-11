import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedCildComponent } from './protected-cild.component';

describe('ProtectedCildComponent', () => {
  let component: ProtectedCildComponent;
  let fixture: ComponentFixture<ProtectedCildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedCildComponent]
    });
    fixture = TestBed.createComponent(ProtectedCildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
