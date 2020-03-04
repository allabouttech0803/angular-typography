import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTypographyComponent } from './first-typography.component';

describe('FirstTypographyComponent', () => {
  let component: FirstTypographyComponent;
  let fixture: ComponentFixture<FirstTypographyComponent>;

  beforeEach(async(() => {
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
