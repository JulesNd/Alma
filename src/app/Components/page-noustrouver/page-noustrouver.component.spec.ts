import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoustrouverComponent } from './page-noustrouver.component';

describe('PageNoustrouverComponent', () => {
  let component: PageNoustrouverComponent;
  let fixture: ComponentFixture<PageNoustrouverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoustrouverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoustrouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
