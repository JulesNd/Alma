import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaiderlaplaneteComponent } from './commentaiderlaplanete.component';

describe('CommentaiderlaplaneteComponent', () => {
  let component: CommentaiderlaplaneteComponent;
  let fixture: ComponentFixture<CommentaiderlaplaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaiderlaplaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaiderlaplaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
