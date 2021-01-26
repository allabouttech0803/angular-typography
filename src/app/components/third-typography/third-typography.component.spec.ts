import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThirdTypographyComponent } from './third-typography.component';

describe('ThirdTypographyComponent', () => {
  let component: ThirdTypographyComponent;
  let fixture: ComponentFixture<ThirdTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
