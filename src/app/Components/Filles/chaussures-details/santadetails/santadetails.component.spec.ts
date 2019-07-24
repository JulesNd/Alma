import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantadetailsComponent } from './santadetails.component';

describe('SantadetailsComponent', () => {
  let component: SantadetailsComponent;
  let fixture: ComponentFixture<SantadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
