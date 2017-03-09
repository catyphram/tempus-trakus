import { Component, Input, OnInit } from '@angular/core';

import { CalendarDate } from '../shared/structures/calendar-date';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit {

  @Input() calendarDate?: CalendarDate;

  constructor() { }

  ngOnInit() {
  }

}
