import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  startDate: Date;
  endDate: Date;
  dates: Date[];

  constructor() {
    this.dates = [];
    this.startDate = this.getStartDate();
    this.endDate = this.getEndDate();

    const loopingDate = new Date(this.startDate.getTime());

    while(loopingDate <= this.endDate) {
      this.dates.push(new Date(loopingDate.getTime()));
      loopingDate.setDate(loopingDate.getDate() + 1);
    }
  }

  ngOnInit() {

  }

  getStartDate(month: Date = new Date()): Date {
    const startDate: Date = new Date(month.getTime());
    startDate.setDate(1);

    const daysToGoBack: number = (startDate.getDay() || 7) - 1;
    startDate.setDate(startDate.getDate() - daysToGoBack);

    return startDate;
  }

  getEndDate(month: Date = new Date()): Date {
    const endDate: Date = new Date(month.getTime());
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0);

    const daysToGoForward: number = 7 - (endDate.getDay() || 7);
    endDate.setDate(endDate.getDate() + daysToGoForward);

    return endDate;
  }

}
