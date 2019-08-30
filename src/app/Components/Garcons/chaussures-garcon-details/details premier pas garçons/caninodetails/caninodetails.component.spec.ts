import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaninodetailsComponent } from './caninodetails.component';

describe('CaninodetailsComponent', () => {
  let component: CaninodetailsComponent;
  let fixture: ComponentFixture<CaninodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaninodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaninodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
