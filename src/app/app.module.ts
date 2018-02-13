import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LookaheadModule } from './lookahead/lookahead.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LookaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
