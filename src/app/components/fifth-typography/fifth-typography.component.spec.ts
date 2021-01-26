import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FifthTypographyComponent } from './fifth-typography.component';

describe('FifthTypographyComponent', () => {
  let component: FifthTypographyComponent;
  let fixture: ComponentFixture<FifthTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
