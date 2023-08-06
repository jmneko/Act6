import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { FormComponent } from './componets/form/form.component';
import { UserCardComponent } from './componets/user-card/user-card.component';
import { C404Component } from './pages/c404/c404.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewUserComponent,
    FormComponent,
    UserCardComponent,
    C404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
