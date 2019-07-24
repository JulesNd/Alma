import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFille4pattesComponent } from './page-fille4pattes.component';

describe('PageFille4pattesComponent', () => {
  let component: PageFille4pattesComponent;
  let fixture: ComponentFixture<PageFille4pattesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFille4pattesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFille4pattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
