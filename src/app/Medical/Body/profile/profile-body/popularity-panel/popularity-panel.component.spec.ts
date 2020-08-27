import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularityPanelComponent } from './popularity-panel.component';

describe('PopularityPanelComponent', () => {
  let component: PopularityPanelComponent;
  let fixture: ComponentFixture<PopularityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
