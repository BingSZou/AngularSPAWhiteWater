import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftGuideComponent } from './raft-guide.component';

describe('RaftGuideComponent', () => {
  let component: RaftGuideComponent;
  let fixture: ComponentFixture<RaftGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaftGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
