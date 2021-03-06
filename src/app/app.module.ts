import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GridPipe } from './calendar/grid.pipe';
import { CalendarDateComponent } from './calendar/calendar-date/calendar-date.component';
import { CalendarNavComponent } from './calendar/calendar-nav/calendar-nav.component';
import { WorkInformationComponent } from './work-information/work-information.component';
import { WorkingHoursComponent } from './work-information/working-hours/working-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GridPipe,
    CalendarDateComponent,
    CalendarNavComponent,
    WorkInformationComponent,
    WorkingHoursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
