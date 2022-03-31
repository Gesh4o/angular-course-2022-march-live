import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DieselEngine, Engine, PetrolEngine } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CustomForms } from './custom-forms/custom-forms.module';

export const ENGINES_TOKEN = new InjectionToken('Services for engines');
export const ENVIRONMENT_TOKEN = new InjectionToken('Environment');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DefaultViewComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    CustomForms,
  ],
  providers: [
    {
      provide: ENGINES_TOKEN,
      // provide: Engine,
      useClass: PetrolEngine,
      multi: true,
    },

    {
      provide: ENVIRONMENT_TOKEN,
      useValue: 'development'
    },

    {
      provide: ENGINES_TOKEN,
      // provide: Engine,
      useClass: DieselEngine,
      multi: true,
    },
    {
      provide: Engine,
      useValue: 'ala-bala-engine',
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
