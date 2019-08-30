import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmindetailsComponent } from './carmindetails.component';

describe('CarmindetailsComponent', () => {
  let component: CarmindetailsComponent;
  let fixture: ComponentFixture<CarmindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
