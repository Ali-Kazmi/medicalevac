import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { OutputTableComponent } from './components/output-table/output-table.component';
import { ClosestComponent } from './components/closest/closest.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    OutputTableComponent,
    ClosestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
