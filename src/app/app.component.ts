import { Component } from '@angular/core';

import { CalendarDate } from './shared/structures/calendar-date';

@Component({
  selector: 'tt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarDate: CalendarDate = null;

  onSelect(calendarDate: CalendarDate) {
    this.calendarDate = calendarDate;
  }
}
