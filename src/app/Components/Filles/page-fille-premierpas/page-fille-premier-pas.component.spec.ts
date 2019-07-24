import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFillePremierPasComponent } from './page-fille-premier-pas.component';

describe('PageFillePremierPasComponent', () => {
  let component: PageFillePremierPasComponent;
  let fixture: ComponentFixture<PageFillePremierPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFillePremierPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFillePremierPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
