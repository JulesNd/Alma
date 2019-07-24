import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGarconComponent } from './page-garcon.component';

describe('PageGarconComponent', () => {
  let component: PageGarconComponent;
  let fixture: ComponentFixture<PageGarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
