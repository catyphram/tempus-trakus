import { Component, Input, OnInit } from '@angular/core';

import { WorkingHours } from '../../shared/structures/working-hours';

import { Mode } from './mode';

@Component({
  selector: 'tt-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss']
})
export class WorkingHoursComponent implements OnInit {

  @Input() workingHours?: WorkingHours;

  mode: Mode;
  modes: Mode[] = [{
    id: 'time',
    label: 'Time'
  }, {
    id: 'duration',
    label: 'Duration'
  }];

  constructor() { }

  ngOnInit(): void {
    this.mode = this.modes[0];
  }

  onModeToggle(): void {
    this.mode = this.mode.id === this.modes[0].id ? this.modes[1] : this.modes[0];
  }

}
