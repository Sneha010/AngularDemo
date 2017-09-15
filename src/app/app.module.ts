import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { Routing } from './app.routing'

import { UsersComponent } from './components/pages/users/users.component';
import { SubjectsComponent } from './components/pages/subjects/subjects.component';
import { UserListComponent } from './components/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SubjectsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
