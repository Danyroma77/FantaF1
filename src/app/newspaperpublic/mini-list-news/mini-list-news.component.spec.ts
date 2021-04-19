import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniListNewsComponent } from './mini-list-news.component';

describe('MiniListNewsComponent', () => {
  let component: MiniListNewsComponent;
  let fixture: ComponentFixture<MiniListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniListNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
