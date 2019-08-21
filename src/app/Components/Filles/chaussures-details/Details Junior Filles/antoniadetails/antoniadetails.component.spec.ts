import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoniadetailsComponent } from './antoniadetails.component';

describe('AntoniadetailsComponent', () => {
  let component: AntoniadetailsComponent;
  let fixture: ComponentFixture<AntoniadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoniadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoniadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
