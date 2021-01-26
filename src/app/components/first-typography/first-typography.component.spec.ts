import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirstTypographyComponent } from './first-typography.component';

describe('FirstTypographyComponent', () => {
  let component: FirstTypographyComponent;
  let fixture: ComponentFixture<FirstTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
