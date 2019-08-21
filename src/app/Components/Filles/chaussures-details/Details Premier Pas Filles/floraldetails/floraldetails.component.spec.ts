import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraldetailsComponent } from './floraldetails.component';

describe('FloraldetailsComponent', () => {
  let component: FloraldetailsComponent;
  let fixture: ComponentFixture<FloraldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
