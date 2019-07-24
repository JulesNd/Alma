import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandidetailsComponent } from './brandidetails.component';

describe('BrandidetailsComponent', () => {
  let component: BrandidetailsComponent;
  let fixture: ComponentFixture<BrandidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
