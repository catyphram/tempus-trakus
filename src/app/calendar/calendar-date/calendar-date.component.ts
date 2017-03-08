import { Component, Input, OnInit } from '@angular/core';

import { CalendarDate } from '../../shared/structures/calendar-date';

@Component({
  selector: 'tt-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss']
})
export class CalendarDateComponent implements OnInit {

  @Input() calendarDate: CalendarDate;

  constructor() { }

  ngOnInit() {
  }

}
