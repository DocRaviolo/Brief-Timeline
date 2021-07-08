import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimelinesListComponent } from './timelines-list/timelines-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { TimelineDetailsComponent } from './timeline-details/timeline-details.component';
import { TimelinePlayComponent } from './timeline-play/timeline-play.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesListComponent,
    TimelineDetailsComponent,
    TimelinePlayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'timeline', component:TimelinesListComponent},
      {path: 'timeline-new', component: TimelineDetailsComponent},
      {path: 'timeline/1', component: TimelineDetailsComponent},
      {path: 'timeline-play', component: TimelinePlayComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
