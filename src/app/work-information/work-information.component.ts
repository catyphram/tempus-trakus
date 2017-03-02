import { Component, Input, OnInit } from '@angular/core';

import { Mode } from './mode';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit {

  @Input() date: Date;

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
