import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service';

@Component({
  selector: 'tt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {

  month: Date;
  dates: Date[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.month = new Date();
    this.updateDates();
  }

  updateDates() {
    this.dates = this.calendarService.getMonthDates(this.month);
  }

  onShowPrevMonth() {
    this.month.setMonth(this.month.getMonth() - 1);
    this.updateDates();
  }

  onShowNextMonth() {
    this.month.setMonth(this.month.getMonth() + 1);
    this.updateDates();
  }

}
