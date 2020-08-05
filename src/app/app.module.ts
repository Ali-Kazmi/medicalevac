import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { OutputTableComponent } from './components/output-table/output-table.component';
import { ClosestComponent } from './components/closest/closest.component';
import { MgrsOptionsComponent } from './components/mgrs-options/mgrs-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    OutputTableComponent,
    ClosestComponent,
    MgrsOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
