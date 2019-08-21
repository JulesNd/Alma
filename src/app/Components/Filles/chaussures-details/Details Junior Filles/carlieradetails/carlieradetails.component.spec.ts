import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlieradetailsComponent } from './carlieradetails.component';

describe('CarlieradetailsComponent', () => {
  let component: CarlieradetailsComponent;
  let fixture: ComponentFixture<CarlieradetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlieradetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlieradetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
