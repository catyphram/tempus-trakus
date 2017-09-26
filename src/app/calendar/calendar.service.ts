import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { WorkInformation } from '../shared/structures/work-information';
import { WorkingHours } from '../shared/structures/working-hours';

@Injectable()
export class CalendarService {

  constructor(private http: Http) { }

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

  getMonthDates(month: Date = new Date()): WorkInformation[] {

    const startDate: Date = this.getStartDate(month);
    const endDate: Date = this.getEndDate(month);
    const loopingDate: Date = new Date(startDate.getTime());
    const workInformationArray: WorkInformation[] = [];

    while (loopingDate <= endDate) {

      const workInformation = new WorkInformation();

      workInformation.date = new Date(loopingDate.getTime());

      workInformationArray.push(workInformation);

      loopingDate.setDate(loopingDate.getDate() + 1);
    }

    return workInformationArray;
  }

  /**
   * Insertion of WorkInformation into WorkInformation objects.
   * Be alert that no new objects are created but existing ones are transformed
  **/
  mergeWorkInformation(workInformationArray: WorkInformation[], data: WorkInformation[]): void {

    /**
     * We are working with an index to increase performance
     * since the array of workInformation is sorted ascending.
     * There is no need to start from the beginning of the array every time.
    **/
    let startIndex = 0;

    workInformationArray.forEach((workInformationItem) => {

      let workInformation: WorkInformation = null;

      for (let i = startIndex; i < data.length; i++) {
        if (this.dateIsEqual(workInformationItem.date, data[i].date)) {
          workInformation = data[i];
          ++startIndex;
          break;
        }
      }

    });

  }

  dateIsEqual(date1: Date, date2: Date): boolean {
    return  date1.getDate()     === date2.getDate()  &&
            date1.getMonth()    === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
  }

  getWorkInformation(): WorkInformation[] {

    // const abc: Observable<WorkInformation[]> = this.http.get('http://localhost:3000/workinformation')
    //                      .map(this.extractData)
    //                      .catch(this.handleError);
    //
    // abc.subscribe(
    //   data => {
    //     console.log('success', data);
    //     console.log(new WorkInformation().fromJSON(data[0]));
    //   },
    //   error => console.log('error', error)
    // );


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

  //
  // // Todo: move both methods below to shared service class
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }
  //
  // private handleError (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   return Observable.throw(errMsg);
  // }

}
