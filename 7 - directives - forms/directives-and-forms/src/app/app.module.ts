import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HightlightDemoComponent } from './hightlight-demo/hightlight-demo.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HightlightDemoComponent,
    HighlightDirective,
    TemplateFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
