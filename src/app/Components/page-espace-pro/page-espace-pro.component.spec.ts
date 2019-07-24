import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEspaceProComponent } from './page-espace-pro.component';

describe('PageEspaceProComponent', () => {
  let component: PageEspaceProComponent;
  let fixture: ComponentFixture<PageEspaceProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEspaceProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEspaceProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
