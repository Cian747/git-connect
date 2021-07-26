import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { DateCountPipe } from './pipe/date-count.pipe';
import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    NavbarComponent,
    RepoComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
