import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountercreateComponent } from './countercreate.component';

describe('CountercreateComponent', () => {
  let component: CountercreateComponent;
  let fixture: ComponentFixture<CountercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
