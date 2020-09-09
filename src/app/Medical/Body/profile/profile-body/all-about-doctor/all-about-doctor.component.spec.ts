import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboutDoctorComponent } from './all-about-doctor.component';

describe('AllAboutDoctorComponent', () => {
  let component: AllAboutDoctorComponent;
  let fixture: ComponentFixture<AllAboutDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAboutDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAboutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
