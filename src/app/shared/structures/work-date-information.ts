import { WorkInformation } from './work-information';

export class WorkDateInformation {
  workInformation?: WorkInformation = null;
  date: Date;

  clone(): WorkDateInformation {
    const clone = new WorkDateInformation();

    clone.date = new Date(this.date.getTime());
    clone.workInformation = this.workInformation ? this.workInformation.clone() : null;

    return clone;
  }
}
