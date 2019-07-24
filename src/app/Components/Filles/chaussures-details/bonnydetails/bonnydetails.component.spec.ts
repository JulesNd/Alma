import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonnydetailsComponent } from './bonnydetails.component';

describe('BonnydetailsComponent', () => {
  let component: BonnydetailsComponent;
  let fixture: ComponentFixture<BonnydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonnydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonnydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
