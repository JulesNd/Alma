import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaussuresGarconDetailsComponent } from './chaussures-garcon-details.component';

describe('ChaussuresGarconDetailsComponent', () => {
  let component: ChaussuresGarconDetailsComponent;
  let fixture: ComponentFixture<ChaussuresGarconDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaussuresGarconDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaussuresGarconDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
