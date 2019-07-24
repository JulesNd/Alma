import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilleJuniorComponent } from './page-fille-junior.component';

describe('PageFilleJuniorComponent', () => {
  let component: PageFilleJuniorComponent;
  let fixture: ComponentFixture<PageFilleJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFilleJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilleJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
