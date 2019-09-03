import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MapComponent} from './Components/map/map.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
    ,MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
