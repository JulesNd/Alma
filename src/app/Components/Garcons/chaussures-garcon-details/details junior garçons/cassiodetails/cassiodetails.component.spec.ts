import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiodetailsComponent } from './cassiodetails.component';

describe('CassiodetailsComponent', () => {
  let component: CassiodetailsComponent;
  let fixture: ComponentFixture<CassiodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassiodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
