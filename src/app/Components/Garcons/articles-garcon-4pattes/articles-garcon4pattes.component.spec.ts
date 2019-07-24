import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesGarcon4pattesComponent } from './articles-garcon4pattes.component';

describe('ArticlesGarcon4pattesComponent', () => {
  let component: ArticlesGarcon4pattesComponent;
  let fixture: ComponentFixture<ArticlesGarcon4pattesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesGarcon4pattesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesGarcon4pattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
