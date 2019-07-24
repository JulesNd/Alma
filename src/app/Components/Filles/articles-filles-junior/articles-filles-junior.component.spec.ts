import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFillesJuniorComponent } from './articles-filles-junior.component';

describe('ArticlesFillesJuniorComponent', () => {
  let component: ArticlesFillesJuniorComponent;
  let fixture: ComponentFixture<ArticlesFillesJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFillesJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFillesJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
