import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionlegalesComponent } from './mentionlegales.component';

describe('MentionlegalesComponent', () => {
  let component: MentionlegalesComponent;
  let fixture: ComponentFixture<MentionlegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionlegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionlegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
