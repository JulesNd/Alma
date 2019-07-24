import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFilles4PattesComponent } from './articles-filles4-pattes.component';

describe('ArticlesFilles4PattesComponent', () => {
  let component: ArticlesFilles4PattesComponent;
  let fixture: ComponentFixture<ArticlesFilles4PattesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFilles4PattesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFilles4PattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
