import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannesdetailsComponent } from './cannesdetails.component';

describe('CannesdetailsComponent', () => {
  let component: CannesdetailsComponent;
  let fixture: ComponentFixture<CannesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
