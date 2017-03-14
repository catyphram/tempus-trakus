import { Injectable } from '@angular/core';

import { WorkInformation } from '../shared/structures/work-information';
import { WorkingHours } from '../shared/structures/working-hours';
import { WorkDateInformation } from '../shared/structures/work-date-information';

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

  getMonthDates(month: Date = new Date()): WorkDateInformation[] {

    const startDate: Date = this.getStartDate(month);
    const endDate: Date = this.getEndDate(month);
    const loopingDate: Date = new Date(startDate.getTime());
    const workDateInformationArray: WorkDateInformation[] = [];

    while (loopingDate <= endDate) {

      const workDateInformation = new WorkDateInformation();

      workDateInformation.date = new Date(loopingDate.getTime());

      workDateInformationArray.push(workDateInformation);

      loopingDate.setDate(loopingDate.getDate() + 1);
    }

    return workDateInformationArray;
  }

  /**
   * Insertion of WorkInformation into WorkDateInformation objects.
   * Be alert that no new objects are created but existing are transformed
  **/
  mergeWorkInformation(workDateInformationArray: WorkDateInformation[], data: WorkDateInformation[]): void {

    /**
     * We are working with an index to increase performance
     * since the array of workInformation is sorted ascending.
     * There is no need to start from the beginning of the array every time.
    **/
    let startIndex = 0;

    workDateInformationArray.forEach((workDateInformation) => {

      let workInformation: WorkInformation = null;

      for (let i = startIndex; i < data.length; i++) {
        if (this.dateIsEqual(workDateInformation.date, data[i].date)) {
          workInformation = data[i].workInformation;
          ++startIndex;
          break;
        }
      }

      if (workInformation) {
        workDateInformation.workInformation = workInformation;
      }

    });

  }

  dateIsEqual(date1: Date, date2: Date): boolean {
    return  date1.getDate()     === date2.getDate()  &&
            date1.getMonth()    === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
  }

  getWorkInformation(): WorkDateInformation[] {

    const mockWorkDateInformation = [
      new WorkDateInformation(),
      new WorkDateInformation(),
      new WorkDateInformation()
    ];
    mockWorkDateInformation[0].date = new Date(2017, 2, 4);
    mockWorkDateInformation[0].workInformation = new WorkInformation();
    mockWorkDateInformation[0].workInformation.workingHours = new WorkingHours();
    mockWorkDateInformation[0].workInformation.workingHours.start = '10:00';
    mockWorkDateInformation[0].workInformation.workingHours.pause = '0:30';
    mockWorkDateInformation[0].workInformation.workingHours.end = '18:00';
    mockWorkDateInformation[0].workInformation.workingHours.isWorkingDay = false;

    mockWorkDateInformation[1].date = new Date(2017, 2, 15);
    mockWorkDateInformation[1].workInformation = new WorkInformation();
    mockWorkDateInformation[1].workInformation.workingHours = new WorkingHours();
    mockWorkDateInformation[1].workInformation.workingHours.start = '10:30';
    mockWorkDateInformation[1].workInformation.workingHours.pause = '1:00';
    mockWorkDateInformation[1].workInformation.workingHours.end = '20:30';

    mockWorkDateInformation[2].date = new Date(2017, 2, 23);
    mockWorkDateInformation[2].workInformation = new WorkInformation();
    mockWorkDateInformation[2].workInformation.workingHours = new WorkingHours();
    mockWorkDateInformation[2].workInformation.workingHours.duration = '8:00';
    mockWorkDateInformation[2].workInformation.comment = 'Harter Stoff';

    return mockWorkDateInformation;
  }

}
