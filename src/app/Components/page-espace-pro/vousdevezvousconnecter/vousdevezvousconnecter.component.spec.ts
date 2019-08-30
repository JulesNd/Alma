import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VousdevezvousconnecterComponent } from './vousdevezvousconnecter.component';

describe('VousdevezvousconnecterComponent', () => {
  let component: VousdevezvousconnecterComponent;
  let fixture: ComponentFixture<VousdevezvousconnecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VousdevezvousconnecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VousdevezvousconnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
