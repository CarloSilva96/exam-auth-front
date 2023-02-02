import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared-module";
import {HomeComponent} from "./home/home.component";
import {MaterialModule} from "../material/material-module";
import {RouterModule} from "@angular/router";
import {ApplicationRoutingModule} from "./application-routing.module";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    ApplicationRoutingModule,
    FormsModule
  ]
})
export class ApplicationModule {
}
