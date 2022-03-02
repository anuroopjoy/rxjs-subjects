import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Subscriber1Component } from './subscriber1/subscriber1.component';
import { Subscriber2Component } from './subscriber2/subscriber2.component';

@NgModule({
  declarations: [AppComponent, Subscriber1Component, Subscriber2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
