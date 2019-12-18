import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontlyStatementComponent } from './montly-statement.component';

describe('MontlyStatementComponent', () => {
  let component: MontlyStatementComponent;
  let fixture: ComponentFixture<MontlyStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontlyStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontlyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
