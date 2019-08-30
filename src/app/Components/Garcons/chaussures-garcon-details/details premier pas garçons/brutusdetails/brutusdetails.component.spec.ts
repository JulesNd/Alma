import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutusdetailsComponent } from './brutusdetails.component';

describe('BrutusdetailsComponent', () => {
  let component: BrutusdetailsComponent;
  let fixture: ComponentFixture<BrutusdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrutusdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrutusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
