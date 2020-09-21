import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailviewComponent } from './emailview.component';

describe('EmailviewComponent', () => {
  let component: EmailviewComponent;
  let fixture: ComponentFixture<EmailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
