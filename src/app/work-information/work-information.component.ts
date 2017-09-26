import { Component, Input, SimpleChanges } from '@angular/core';

import { WorkInformation } from '../shared/structures/work-information';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent {

  @Input() workInformation?: WorkInformation = null;

  constructor() { }

}
