import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeondetailsComponent } from './leondetails.component';

describe('LeondetailsComponent', () => {
  let component: LeondetailsComponent;
  let fixture: ComponentFixture<LeondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
