import { Component, Input, OnInit } from '@angular/core';

import { WorkDateInformation } from '../work-date-information';

@Component({
  selector: 'tt-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss']
})
export class CalendarDateComponent implements OnInit {

  @Input() workDateInformation: WorkDateInformation;

  constructor() { }

  ngOnInit() {
  }

}
