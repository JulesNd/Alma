import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagechromefreeComponent } from './pagechromefree.component';

describe('PagechromefreeComponent', () => {
  let component: PagechromefreeComponent;
  let fixture: ComponentFixture<PagechromefreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagechromefreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagechromefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
