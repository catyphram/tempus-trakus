import { WorkInformation } from './work-information';

export class CalendarDate {
  hasWorkInformation: boolean;
  workInformation?: WorkInformation = null;
  date: Date;
}
