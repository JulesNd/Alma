import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGarcon4pattesComponent } from './page-garcon4pattes.component';

describe('PageGarcon4pattesComponent', () => {
  let component: PageGarcon4pattesComponent;
  let fixture: ComponentFixture<PageGarcon4pattesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGarcon4pattesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGarcon4pattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
