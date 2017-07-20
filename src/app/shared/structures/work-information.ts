import { Serializable } from './serializable';
import { WorkingHours } from './working-hours';

export class WorkInformation extends Serializable {
  date: Date;
  workingHours: WorkingHours = new WorkingHours();
  comment?: string;

  clone(): WorkInformation {
    const clone = new WorkInformation();

    clone.date = new Date(this.date.getTime());
    clone.workingHours = this.workingHours.clone();
    clone.comment = this.comment;

    return clone;
  }

  fromJSON(json: any): WorkInformation {
    const date = json.date.split('-');

    this.date = new Date(date[2], date[1] - 1, date[0]);
    this.workingHours = new WorkingHours().fromJSON(json.workingHours);

    if (json.comment) this.comment = json.comment;

    return this;
  }
}
