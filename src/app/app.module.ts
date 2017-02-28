import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GridPipe } from './calendar/grid.pipe';
import { CalendarDateComponent } from './calendar/calendar-date/calendar-date.component';
import { CalendarNavComponent } from './calendar/calendar-nav/calendar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GridPipe,
    CalendarDateComponent,
    CalendarNavComponent
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
