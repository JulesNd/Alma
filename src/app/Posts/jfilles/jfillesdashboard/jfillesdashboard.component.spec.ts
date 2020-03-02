import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JfillesdashboardComponent } from './jfillesdashboard.component';

describe('JfillesdashboardComponent', () => {
  let component: JfillesdashboardComponent;
  let fixture: ComponentFixture<JfillesdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JfillesdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JfillesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
