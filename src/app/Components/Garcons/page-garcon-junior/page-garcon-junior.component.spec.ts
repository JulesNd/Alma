import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGarconJuniorComponent } from './page-garcon-junior.component';

describe('PageGarconJuniorComponent', () => {
  let component: PageGarconJuniorComponent;
  let fixture: ComponentFixture<PageGarconJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGarconJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGarconJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
