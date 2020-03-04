import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthTypographyComponent } from './sixth-typography.component';

describe('SixthTypographyComponent', () => {
  let component: SixthTypographyComponent;
  let fixture: ComponentFixture<SixthTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
