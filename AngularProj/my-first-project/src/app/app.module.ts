import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LifecycleComponent,
    UserEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
