import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreSavoirFaireComponent } from './notre-savoir-faire.component';

describe('NotreSavoirFaireComponent', () => {
  let component: NotreSavoirFaireComponent;
  let fixture: ComponentFixture<NotreSavoirFaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreSavoirFaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreSavoirFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
