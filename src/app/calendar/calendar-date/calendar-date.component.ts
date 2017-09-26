import { Component, Input, OnInit } from '@angular/core';

import { WorkInformation } from '../../shared/structures/work-information';

@Component({
  selector: 'tt-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss']
})
export class CalendarDateComponent implements OnInit {

  @Input() workInformation: WorkInformation;

  constructor() { }

  ngOnInit() {
  }

}
