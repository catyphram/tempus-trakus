import { WorkInformation } from '../shared/structures/work-information';

export class CalendarDate {
  hasWorkInformation: boolean;
  workInformation?: WorkInformation;
  date: Date;
}
