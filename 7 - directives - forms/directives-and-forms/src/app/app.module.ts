import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HightlightDemoComponent } from './hightlight-demo/hightlight-demo.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HightlightDemoComponent,
    HighlightDirective,
    TemplateFormsDemoComponent,
    ReactiveFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
