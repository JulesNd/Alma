import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmosdetailsComponent } from './cosmosdetails.component';

describe('CosmosdetailsComponent', () => {
  let component: CosmosdetailsComponent;
  let fixture: ComponentFixture<CosmosdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmosdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
