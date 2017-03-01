import { Component } from '@angular/core';

@Component({
  selector: 'tt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date: Date = null;

  onSelect(date: Date) {
    this.date = date;
  }
}
