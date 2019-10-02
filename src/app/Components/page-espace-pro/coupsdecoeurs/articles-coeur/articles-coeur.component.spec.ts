import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCoeurComponent } from './articles-coeur.component';

describe('ArticlesCoeurComponent', () => {
  let component: ArticlesCoeurComponent;
  let fixture: ComponentFixture<ArticlesCoeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesCoeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
