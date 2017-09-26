import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { WorkInformation } from '../shared/structures/work-information';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'tt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService]
})
export class CalendarComponent implements OnInit {

  @Output() select = new EventEmitter<WorkInformation>();

  isLoading: boolean;
  month: Date;
  workInformation: WorkInformation[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.month = new Date();
    this.updateDates();
  }

  updateDates() {
    this.workInformation = this.calendarService.getMonthDates(this.month);
    this.loadData();
  }

  loadData() {
    this.isLoading = true;

    const workInformation = this.calendarService.getWorkInformation();
    this.calendarService.mergeWorkInformation(this.workInformation, workInformation);

    this.isLoading = false;
  }

  onShowPrevMonth(): void {
    this.month.setMonth(this.month.getMonth() - 1);
    this.updateDates();
  }

  onShowNextMonth(): void {
    this.month.setMonth(this.month.getMonth() + 1);
    this.updateDates();
  }

  onSelect(workInformation: WorkInformation): void {
    this.select.emit(workInformation);
  }

}
/*
Für die API/Frontend:
workinformation[] aufsteigend sortiert, kann tage überspringen
Anfänglich wird der letze, dieser und der nächste Monat geladen.
Also Anfrage an die API mit Start und End-Datum inkl.
Bei Klick auf nächsten oder vorherigen Monat wird der bereits geladene Monat angezeigt
und der vorherige/nächste Monat vorgeladen.
Bei direkter Enigabe des Datums wird der ensprechende Monat geladen, sowie der davor und danach.
*/
