import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbudgetComponent } from './mbudget.component';

describe('MbudgetComponent', () => {
  let component: MbudgetComponent;
  let fixture: ComponentFixture<MbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
