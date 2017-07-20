import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { WorkInformation } from '../shared/structures/work-information';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit, OnChanges {

  bufferWorkInformation: WorkInformation = null;
  @Input() workInformation?: WorkInformation = null;

  constructor() { }

  ngOnInit() {
    this.updateBufferWorkInformation(this.workInformation);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateBufferWorkInformation(changes['workInformation'].currentValue);
  }

  updateBufferWorkInformation(workInformation: WorkInformation) {
    if (workInformation) {
      this.bufferWorkInformation = workInformation.clone();
    } else {
      this.bufferWorkInformation = null;
    }
  }

}
