import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JfillesComponent } from './jfilles.component';

describe('JfillesComponent', () => {
  let component: JfillesComponent;
  let fixture: ComponentFixture<JfillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JfillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JfillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
