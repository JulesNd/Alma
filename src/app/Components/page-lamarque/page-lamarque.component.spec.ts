import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLamarqueComponent } from './page-lamarque.component';

describe('PageLamarqueComponent', () => {
  let component: PageLamarqueComponent;
  let fixture: ComponentFixture<PageLamarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLamarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLamarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
