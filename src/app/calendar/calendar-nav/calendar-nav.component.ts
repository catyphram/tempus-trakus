import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tt-calendar-nav',
  templateUrl: './calendar-nav.component.html',
  styleUrls: ['./calendar-nav.component.scss']
})
export class CalendarNavComponent implements OnInit {

  @Output() showPrevMonth = new EventEmitter<void>();
  @Output() showNextMonth = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onShowPrevMonth() {
    this.showPrevMonth.emit();
  }

  onShowNextMonth() {
    this.showNextMonth.emit();
  }

}
