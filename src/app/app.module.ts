import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { Routing } from './app.routing'

import { UsersComponent } from './components/pages/users/users.component';
import { SubjectsComponent } from './components/pages/subjects/subjects.component';
import { UserListComponent } from './components/user-list/user-list.component'
import { UserListItemComponent } from './components/user-list-item/user-list-item.component'
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import { UserDetailGuard } from './user-detail-guard.service';
import { RestrictedAccessComponent } from './components/restricted-access/restricted-access.component';
import { NotSelectedComponent } from './components/not-selected/not-selected.component'
import { DisplayComponent } from './components/display/display.component';
import { IncerementComponent } from './components/increment/increment.component';
import { DecerementComponent } from './components/decrement/decrement.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SubjectsComponent,
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
    RestrictedAccessComponent,
    NotSelectedComponent,
    DisplayComponent,
    IncerementComponent,
    DecerementComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule
  ],
  providers: [UserDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
