import { Injectable } from '@angular/core';

import { WorkInformation } from '../shared/structures/work-information';
import { WorkingHours } from '../shared/structures/working-hours';
import { CalendarDate } from '../shared/structures/calendar-date';

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

  getMonthDates(month: Date = new Date()): CalendarDate[] {

    const startDate: Date = this.getStartDate(month);
    const endDate: Date = this.getEndDate(month);
    const loopingDate: Date = new Date(startDate.getTime());
    const calendarDates: CalendarDate[] = [];

    while (loopingDate <= endDate) {

      const calendarDate = new CalendarDate();

      calendarDate.hasWorkInformation = false;
      calendarDate.date = new Date(loopingDate.getTime());

      calendarDates.push(calendarDate);

      loopingDate.setDate(loopingDate.getDate() + 1);
    }

    return calendarDates;
  }

  /**
   * Insertion of WorkInformation into CalendarDate objects.
   * Be alert that no new objects are created but existing are transformed
  **/
  mergeWorkInformation(calendarDates: CalendarDate[], data: WorkInformation[]): void {

    /**
     * We are working with an index to increase performance
     * since the array of workInformation is sorted ascending.
     * There is no need to start from the beginning of the array every time.
    **/
    let startIndex = 0;

    calendarDates.forEach((calendarDate) => {

      let workInformation = null;

      for (let i = startIndex; i < data.length; i++) {
        if (this.dateIsEqual(calendarDate.date, data[i].date)) {
          workInformation = data[i];
          ++startIndex;
          break;
        }
      }

      if (workInformation) {
        calendarDate.hasWorkInformation = true;
        calendarDate.workInformation = workInformation;
      }

    });

  }

  dateIsEqual(date1: Date, date2: Date): boolean {
    return  date1.getDate()     === date2.getDate()  &&
            date1.getMonth()    === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
  }

  getWorkInformation(): WorkInformation[] {

    const mockWorkInformation = [
      new WorkInformation(),
      new WorkInformation(),
      new WorkInformation()
    ];
    mockWorkInformation[0].date = new Date(2017, 2, 4);
    mockWorkInformation[0].workingHours = new WorkingHours();
    mockWorkInformation[0].workingHours.start = '10:00';
    mockWorkInformation[0].workingHours.pause = '0:30';
    mockWorkInformation[0].workingHours.end = '18:00';
    mockWorkInformation[0].workingHours.isWorkingDay = false;

    mockWorkInformation[1].date = new Date(2017, 2, 15);

    mockWorkInformation[1].workingHours = new WorkingHours();
    mockWorkInformation[1].workingHours.start = '10:30';
    mockWorkInformation[1].workingHours.pause = '1:00';
    mockWorkInformation[1].workingHours.end = '20:30';

    mockWorkInformation[2].date = new Date(2017, 2, 23);
    mockWorkInformation[2].workingHours = new WorkingHours();
    mockWorkInformation[2].workingHours.duration = '8:00';
    mockWorkInformation[2].comment = 'Harter Stoff';

    return mockWorkInformation;
  }

}
