import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoireimageComponent } from './histoireimage.component';

describe('HistoireimageComponent', () => {
  let component: HistoireimageComponent;
  let fixture: ComponentFixture<HistoireimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoireimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoireimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
