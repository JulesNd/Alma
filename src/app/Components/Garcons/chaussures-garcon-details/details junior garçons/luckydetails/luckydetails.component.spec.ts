import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckydetailsComponent } from './luckydetails.component';

describe('LuckydetailsComponent', () => {
  let component: LuckydetailsComponent;
  let fixture: ComponentFixture<LuckydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
