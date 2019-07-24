import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiedetailsComponent } from './cookiedetails.component';

describe('CookiedetailsComponent', () => {
  let component: CookiedetailsComponent;
  let fixture: ComponentFixture<CookiedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
