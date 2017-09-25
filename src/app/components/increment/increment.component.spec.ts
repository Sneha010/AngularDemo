import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncerementComponent } from './increment.component';

describe('IncerementComponent', () => {
  let component: IncerementComponent;
  let fixture: ComponentFixture<IncerementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncerementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncerementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
