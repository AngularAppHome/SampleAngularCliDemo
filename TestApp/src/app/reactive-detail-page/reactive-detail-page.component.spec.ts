import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDetailPageComponent } from './reactive-detail-page.component';

describe('ReactiveDetailPageComponent', () => {
  let component: ReactiveDetailPageComponent;
  let fixture: ComponentFixture<ReactiveDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
