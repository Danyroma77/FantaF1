import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUserAdminComponent } from './landing-user-admin.component';

describe('LandingUserAdminComponent', () => {
  let component: LandingUserAdminComponent;
  let fixture: ComponentFixture<LandingUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingUserAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
