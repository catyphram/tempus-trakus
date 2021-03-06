/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalendarDateComponent } from './calendar-date.component';
import { WorkInformation } from '../../shared/structures/work-date-information';

describe('CalendarDateComponent', () => {
  let component: CalendarDateComponent;
  let fixture: ComponentFixture<CalendarDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateComponent);
    component = fixture.componentInstance;
    component.workInformation = new WorkInformation();
    component.workInformation.date = new Date();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
