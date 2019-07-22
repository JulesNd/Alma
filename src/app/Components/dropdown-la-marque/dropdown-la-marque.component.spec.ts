import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLaMarqueComponent } from './dropdown-la-marque.component';

describe('DropdownLaMarqueComponent', () => {
  let component: DropdownLaMarqueComponent;
  let fixture: ComponentFixture<DropdownLaMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownLaMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownLaMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
