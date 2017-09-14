import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing'

import { UsersComponent } from './components/pages/users/users.component';
import { SubjectsComponent } from './components/pages/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
