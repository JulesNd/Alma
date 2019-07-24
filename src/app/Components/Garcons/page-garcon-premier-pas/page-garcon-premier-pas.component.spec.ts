import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGarconPremierPasComponent } from './page-garcon-premier-pas.component';

describe('PageGarconPremierPasComponent', () => {
  let component: PageGarconPremierPasComponent;
  let fixture: ComponentFixture<PageGarconPremierPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGarconPremierPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGarconPremierPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
