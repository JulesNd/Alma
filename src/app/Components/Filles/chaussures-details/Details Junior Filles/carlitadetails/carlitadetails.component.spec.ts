import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlitadetailsComponent } from './carlitadetails.component';

describe('CarlitadetailsComponent', () => {
  let component: CarlitadetailsComponent;
  let fixture: ComponentFixture<CarlitadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlitadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlitadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
