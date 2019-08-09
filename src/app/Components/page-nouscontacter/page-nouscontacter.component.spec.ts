import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouscontacterComponent } from './page-nouscontacter.component';

describe('PageNouscontacterComponent', () => {
  let component: PageNouscontacterComponent;
  let fixture: ComponentFixture<PageNouscontacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNouscontacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouscontacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
