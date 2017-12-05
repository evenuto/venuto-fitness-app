import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { WorkoutTrackComponent } from './workout-track/workout-track.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    WorkoutTrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "workout-track", component: WorkoutTrackComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
