import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSummaryCardComponent } from './location-summary-card.component';

describe('LocationSummaryCardComponent', () => {
  let component: LocationSummaryCardComponent;
  let fixture: ComponentFixture<LocationSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
