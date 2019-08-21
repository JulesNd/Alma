import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MellowdetailsComponent } from './mellowdetails.component';

describe('MellowdetailsComponent', () => {
  let component: MellowdetailsComponent;
  let fixture: ComponentFixture<MellowdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MellowdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MellowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
