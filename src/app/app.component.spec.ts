/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GridPipe } from './calendar/grid.pipe';
import { CalendarDateComponent } from './calendar/calendar-date/calendar-date.component';
import { CalendarNavComponent } from './calendar/calendar-nav/calendar-nav.component';
import { WorkInformationComponent } from './work-information/work-information.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalendarComponent,
        GridPipe,
        CalendarDateComponent,
        CalendarNavComponent,
        WorkInformationComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render calendar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('tt-calendar')).toBeTruthy();
  }));
});
