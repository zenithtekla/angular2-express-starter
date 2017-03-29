import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUiListingComponent } from './email-ui-listing.component';

describe('EmailUiListingComponent', () => {
  let component: EmailUiListingComponent;
  let fixture: ComponentFixture<EmailUiListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailUiListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUiListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
