import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleButtonComponent],
  exports: [ToggleButtonComponent]
})
export class SharedModule { }
