import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPFillesComponent } from './ppfilles.component';

describe('PPFillesComponent', () => {
  let component: PPFillesComponent;
  let fixture: ComponentFixture<PPFillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPFillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPFillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
