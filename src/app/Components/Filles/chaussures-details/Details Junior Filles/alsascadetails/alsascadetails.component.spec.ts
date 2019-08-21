import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsascadetailsComponent } from './alsascadetails.component';

describe('AlsascadetailsComponent', () => {
  let component: AlsascadetailsComponent;
  let fixture: ComponentFixture<AlsascadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsascadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsascadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
