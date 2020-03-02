import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpgarcondashboardComponent } from './ppgarcondashboard.component';

describe('PpgarcondashboardComponent', () => {
  let component: PpgarcondashboardComponent;
  let fixture: ComponentFixture<PpgarcondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpgarcondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpgarcondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
