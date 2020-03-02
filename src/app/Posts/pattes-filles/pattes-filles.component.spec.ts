import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattesFillesComponent } from './pattes-filles.component';

describe('PattesFillesComponent', () => {
  let component: PattesFillesComponent;
  let fixture: ComponentFixture<PattesFillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattesFillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattesFillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
