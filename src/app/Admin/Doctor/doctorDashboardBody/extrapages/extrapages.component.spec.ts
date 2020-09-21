import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrapagesComponent } from './extrapages.component';

describe('ExtrapagesComponent', () => {
  let component: ExtrapagesComponent;
  let fixture: ComponentFixture<ExtrapagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrapagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrapagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
