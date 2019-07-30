import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagealmaplaneteComponent } from './pagealmaplanete.component';

describe('PagealmaplaneteComponent', () => {
  let component: PagealmaplaneteComponent;
  let fixture: ComponentFixture<PagealmaplaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagealmaplaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagealmaplaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
