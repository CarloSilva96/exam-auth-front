import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared-module";
import {MatMenuModule} from "@angular/material/menu";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ApplicationModule} from "./application/application.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    MatMenuModule,
    RouterModule,
    ReactiveFormsModule,
    ApplicationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
