import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
//import { ContinentService } from './continentService';


import { AppComponent } from './app.component';
import { ReturnStatement } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [
    //ContinentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  static get Name(): string { return 'AppModule'; }
}
