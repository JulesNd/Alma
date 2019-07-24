import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFillePremierPasComponent } from './articles-fille-premier-pas.component';

describe('ArticlesFillePremierPasComponent', () => {
  let component: ArticlesFillePremierPasComponent;
  let fixture: ComponentFixture<ArticlesFillePremierPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFillePremierPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFillePremierPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
