import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipsedetailsComponent } from './eclipsedetails.component';

describe('EclipsedetailsComponent', () => {
  let component: EclipsedetailsComponent;
  let fixture: ComponentFixture<EclipsedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclipsedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclipsedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
