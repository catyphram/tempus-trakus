import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service';

@Component({
  selector: 'tt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {

  dates: Date[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {

    const startDate: Date = this.calendarService.getStartDate();
    const endDate: Date = this.calendarService.getEndDate();
    const loopingDate: Date = new Date(startDate.getTime());
    const dates: Date[] = [];

    while (loopingDate <= endDate) {
      dates.push(new Date(loopingDate.getTime()));
      loopingDate.setDate(loopingDate.getDate() + 1);
    }

    this.dates = dates;
  }

}
