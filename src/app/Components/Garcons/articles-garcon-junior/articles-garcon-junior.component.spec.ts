import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesGarconJuniorComponent } from './articles-garcon-junior.component';

describe('ArticlesGarconJuniorComponent', () => {
  let component: ArticlesGarconJuniorComponent;
  let fixture: ComponentFixture<ArticlesGarconJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesGarconJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesGarconJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
