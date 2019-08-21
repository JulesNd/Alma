import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeurdetailsComponent } from './coeurdetails.component';

describe('CoeurdetailsComponent', () => {
  let component: CoeurdetailsComponent;
  let fixture: ComponentFixture<CoeurdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoeurdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeurdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
