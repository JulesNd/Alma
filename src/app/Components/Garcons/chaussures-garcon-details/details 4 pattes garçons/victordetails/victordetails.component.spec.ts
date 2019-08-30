import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictordetailsComponent } from './victordetails.component';

describe('VictordetailsComponent', () => {
  let component: VictordetailsComponent;
  let fixture: ComponentFixture<VictordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
