import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattesGarconComponent } from './pattes-garcon.component';

describe('PattesGarconComponent', () => {
  let component: PattesGarconComponent;
  let fixture: ComponentFixture<PattesGarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattesGarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattesGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
