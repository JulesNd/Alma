import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpfillesdashboardComponent } from './ppfillesdashboard.component';

describe('PpfillesdashboardComponent', () => {
  let component: PpfillesdashboardComponent;
  let fixture: ComponentFixture<PpfillesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpfillesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpfillesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
