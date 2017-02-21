import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tt-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss']
})
export class CalendarDateComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
