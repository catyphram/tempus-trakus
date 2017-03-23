import { WorkingHours } from './working-hours';

export class WorkInformation {
  workingHours: WorkingHours = new WorkingHours();
  comment?: string;

  clone(): WorkInformation {
    const clone = new WorkInformation();

    clone.comment = this.comment;
    clone.workingHours = this.workingHours.clone();

    return clone;
  }
}
