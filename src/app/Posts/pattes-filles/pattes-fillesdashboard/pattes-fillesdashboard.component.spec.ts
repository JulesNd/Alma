import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattesFillesdashboardComponent } from './pattes-fillesdashboard.component';

describe('PattesFillesdashboardComponent', () => {
  let component: PattesFillesdashboardComponent;
  let fixture: ComponentFixture<PattesFillesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattesFillesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattesFillesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
