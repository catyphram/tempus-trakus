import { Component } from '@angular/core';

import { WorkInformation } from './shared/structures/work-information';

@Component({
  selector: 'tt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  workInformation: WorkInformation = null;

  onSelect(workInformation: WorkInformation) {
    this.workInformation = workInformation;
  }

  printInfos() {
    return JSON.stringify(this.workInformation);
  }
}
