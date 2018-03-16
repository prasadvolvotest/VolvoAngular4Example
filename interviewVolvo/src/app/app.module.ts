import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { ViewComponent } from './viewUser/view.component';

import { UserService } from './services/users.service';
import { MainService } from './services/main.service';

import { HttpErrorHandler } from './commons/error-handler';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
  	UserService,
    MainService,
  	HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
