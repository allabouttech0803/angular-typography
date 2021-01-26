import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FourthTypographyComponent } from './fourth-typography.component';

describe('FourthTypographyComponent', () => {
  let component: FourthTypographyComponent;
  let fixture: ComponentFixture<FourthTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
