import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincidetailsComponent } from './vincidetails.component';

describe('VincidetailsComponent', () => {
  let component: VincidetailsComponent;
  let fixture: ComponentFixture<VincidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
