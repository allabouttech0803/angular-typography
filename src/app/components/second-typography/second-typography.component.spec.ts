import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTypographyComponent } from './second-typography.component';

describe('SecondTypographyComponent', () => {
  let component: SecondTypographyComponent;
  let fixture: ComponentFixture<SecondTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
