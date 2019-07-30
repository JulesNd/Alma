import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetannageComponent } from './pagetannage.component';

describe('PagetannageComponent', () => {
  let component: PagetannageComponent;
  let fixture: ComponentFixture<PagetannageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetannageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetannageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
