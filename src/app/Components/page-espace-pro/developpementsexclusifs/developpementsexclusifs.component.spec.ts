import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppementsexclusifsComponent } from './developpementsexclusifs.component';

describe('DeveloppementsexclusifsComponent', () => {
  let component: DeveloppementsexclusifsComponent;
  let fixture: ComponentFixture<DeveloppementsexclusifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloppementsexclusifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloppementsexclusifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
