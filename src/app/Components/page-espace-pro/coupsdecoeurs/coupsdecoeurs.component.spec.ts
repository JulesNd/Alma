import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupsdecoeursComponent } from './coupsdecoeurs.component';

describe('CoupsdecoeursComponent', () => {
  let component: CoupsdecoeursComponent;
  let fixture: ComponentFixture<CoupsdecoeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupsdecoeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupsdecoeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
