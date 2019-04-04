import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    NowPlayingComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
