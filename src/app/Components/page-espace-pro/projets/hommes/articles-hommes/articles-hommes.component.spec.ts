import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHommesComponent } from './articles-hommes.component';

describe('ArticlesHommesComponent', () => {
  let component: ArticlesHommesComponent;
  let fixture: ComponentFixture<ArticlesHommesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHommesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
