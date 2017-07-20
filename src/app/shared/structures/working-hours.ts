import { Serializable } from './serializable';

export class WorkingHours extends Serializable {
  start?: string;
  end?: string;
  pause?: string;
  duration?: string;
  isWorkingDay = true;

  clone(): WorkingHours {
    const clone = new WorkingHours();

    clone.start = this.start;
    clone.end = this.end;
    clone.pause = this.pause;
    clone.duration = this.duration;
    clone.isWorkingDay = this.isWorkingDay;

    return clone;
  }

  fromJSON(json: any): WorkingHours {
    this.isWorkingDay = json.isWorkingDay;

    if (json.start) this.start = json.start;
    if (json.end) this.end = json.end;
    if (json.pause) this.pause = json.pause;
    if (json.duration) this.duration = json.duration;

    return this;
  }
}
