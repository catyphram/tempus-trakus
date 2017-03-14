import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { WorkDateInformation } from '../shared/structures/work-date-information';
import { WorkInformation } from '../shared/structures/work-information';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit, OnChanges {

  bufferWorkDateInformation: WorkDateInformation = null;
  @Input() workDateInformation?: WorkDateInformation = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateBufferWorkDateInformation(changes['workDateInformation'].currentValue);
  }

  updateBufferWorkDateInformation(workDateInformation: WorkDateInformation) {
    /* maybe really only use workinformation obj here

      also cone the object (create blank one and fill properties probably)
    */

    this.bufferWorkDateInformation = workDateInformation;

    if (workDateInformation) {
      this.bufferWorkDateInformation.workInformation = this.bufferWorkDateInformation.workInformation || new WorkInformation();
    }
  }

}
