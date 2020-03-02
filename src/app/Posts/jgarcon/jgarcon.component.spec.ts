import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JGarconComponent } from './jgarcon.component';

describe('JGarconComponent', () => {
  let component: JGarconComponent;
  let fixture: ComponentFixture<JGarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JGarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
