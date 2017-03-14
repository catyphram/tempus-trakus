import { Component } from '@angular/core';

import { WorkDateInformation } from './shared/structures/work-date-information';

@Component({
  selector: 'tt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  workDateInformation: WorkDateInformation = null;

  onSelect(workDateInformation: WorkDateInformation) {
    this.workDateInformation = workDateInformation;
  }

  printInfos() {
    return JSON.stringify(this.workDateInformation);
  }
}
