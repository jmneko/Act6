import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { FormComponent } from './componets/form/form.component';
import { PostCardComponent } from './componets/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewPostComponent,
    FormComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
