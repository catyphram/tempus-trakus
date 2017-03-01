import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss']
})
export class WorkInformationComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
