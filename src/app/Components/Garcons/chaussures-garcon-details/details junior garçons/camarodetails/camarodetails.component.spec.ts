import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarodetailsComponent } from './camarodetails.component';

describe('CamarodetailsComponent', () => {
  let component: CamarodetailsComponent;
  let fixture: ComponentFixture<CamarodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamarodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
