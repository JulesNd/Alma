import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedecompteComponent } from './demandedecompte.component';

describe('DemandedecompteComponent', () => {
  let component: DemandedecompteComponent;
  let fixture: ComponentFixture<DemandedecompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandedecompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandedecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
