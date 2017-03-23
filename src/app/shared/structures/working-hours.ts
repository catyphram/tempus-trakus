export class WorkingHours {
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
}
