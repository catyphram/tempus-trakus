import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

  constructor() { }

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
