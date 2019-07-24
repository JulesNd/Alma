import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvertondetailsComponent } from './evertondetails.component';

describe('EvertondetailsComponent', () => {
  let component: EvertondetailsComponent;
  let fixture: ComponentFixture<EvertondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvertondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvertondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
