import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecerementComponent } from './decrement.component';

describe('DecerementComponent', () => {
  let component: DecerementComponent;
  let fixture: ComponentFixture<DecerementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecerementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecerementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
