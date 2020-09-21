import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmyprofileComponent } from './editmyprofile.component';

describe('EditmyprofileComponent', () => {
  let component: EditmyprofileComponent;
  let fixture: ComponentFixture<EditmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
