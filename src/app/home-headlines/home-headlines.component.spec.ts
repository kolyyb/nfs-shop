import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadlinesComponent } from './home-headlines.component';

describe('HomeHeadlinesComponent', () => {
  let component: HomeHeadlinesComponent;
  let fixture: ComponentFixture<HomeHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
