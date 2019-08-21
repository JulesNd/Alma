import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtoiledetailsComponent } from './etoiledetails.component';

describe('EtoiledetailsComponent', () => {
  let component: EtoiledetailsComponent;
  let fixture: ComponentFixture<EtoiledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtoiledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtoiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
