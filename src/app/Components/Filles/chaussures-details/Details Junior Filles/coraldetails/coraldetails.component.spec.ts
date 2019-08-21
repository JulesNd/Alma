import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoraldetailsComponent } from './coraldetails.component';

describe('CoraldetailsComponent', () => {
  let component: CoraldetailsComponent;
  let fixture: ComponentFixture<CoraldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoraldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoraldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
