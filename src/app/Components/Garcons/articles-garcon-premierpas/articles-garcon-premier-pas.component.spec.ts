import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesGarconPremierPasComponent } from './articles-garcon-premier-pas.component';

describe('ArticlesGarconPremierPasComponent', () => {
  let component: ArticlesGarconPremierPasComponent;
  let fixture: ComponentFixture<ArticlesGarconPremierPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesGarconPremierPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesGarconPremierPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
