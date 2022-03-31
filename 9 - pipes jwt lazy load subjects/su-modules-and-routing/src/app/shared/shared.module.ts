import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { MyJsonPipe } from './my-json.pipe';



@NgModule({
  declarations: [
    ShortenPipe,
    MyJsonPipe
  ],
  imports: [
    CommonModule
  ], exports: [
    ShortenPipe,
    MyJsonPipe
  ]
})
export class SharedModule { }
