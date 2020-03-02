import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JgarcondashboardComponent } from './jgarcondashboard.component';

describe('JgarcondashboardComponent', () => {
  let component: JgarcondashboardComponent;
  let fixture: ComponentFixture<JgarcondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JgarcondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JgarcondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
