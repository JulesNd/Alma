import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattydetailsComponent } from './cattydetails.component';

describe('CattydetailsComponent', () => {
  let component: CattydetailsComponent;
  let fixture: ComponentFixture<CattydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
