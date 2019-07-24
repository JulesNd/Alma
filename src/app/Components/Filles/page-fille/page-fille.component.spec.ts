import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilleComponent } from './page-fille.component';

describe('PageFilleComponent', () => {
  let component: PageFilleComponent;
  let fixture: ComponentFixture<PageFilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
