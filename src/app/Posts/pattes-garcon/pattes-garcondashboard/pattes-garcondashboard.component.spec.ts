import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattesGarcondashboardComponent } from './pattes-garcondashboard.component';

describe('PattesGarcondashboardComponent', () => {
  let component: PattesGarcondashboardComponent;
  let fixture: ComponentFixture<PattesGarcondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattesGarcondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattesGarcondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
