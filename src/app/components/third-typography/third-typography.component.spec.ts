import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTypographyComponent } from './third-typography.component';

describe('ThirdTypographyComponent', () => {
  let component: ThirdTypographyComponent;
  let fixture: ComponentFixture<ThirdTypographyComponent>;

  beforeEach(async(() => {
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
