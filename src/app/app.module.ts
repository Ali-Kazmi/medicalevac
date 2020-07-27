import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { OutputTableComponent } from './components/output-table/output-table.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsBarComponent,
    TitleBarComponent,
    OutputTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
