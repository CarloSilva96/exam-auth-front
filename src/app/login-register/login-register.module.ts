import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginRegisterRoutingModule} from "./login-register-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material-module";
import {SharedModule} from "../shared/shared-module";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class LoginRegisterModule {
}
