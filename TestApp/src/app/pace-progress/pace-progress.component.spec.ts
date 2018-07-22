import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceProgressComponent } from './pace-progress.component';

describe('PaceProgressComponent', () => {
  let component: PaceProgressComponent;
  let fixture: ComponentFixture<PaceProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
