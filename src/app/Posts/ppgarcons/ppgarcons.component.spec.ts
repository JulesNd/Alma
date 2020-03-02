import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPGarconsComponent } from './ppgarcons.component';

describe('PPGarconsComponent', () => {
  let component: PPGarconsComponent;
  let fixture: ComponentFixture<PPGarconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPGarconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPGarconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
