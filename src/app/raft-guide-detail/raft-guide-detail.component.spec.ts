import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftGuideDetailComponent } from './raft-guide-detail.component';

describe('RaftGuideDetailComponent', () => {
  let component: RaftGuideDetailComponent;
  let fixture: ComponentFixture<RaftGuideDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaftGuideDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftGuideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
