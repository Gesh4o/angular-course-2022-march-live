import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { TimeAgoPipe } from './time-ago.pipe';



@NgModule({
  declarations: [
    WelcomeComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeComponent,
    TimeAgoPipe
  ]
})
export class SharedModule { }
