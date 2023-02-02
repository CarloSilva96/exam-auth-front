import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageValidateComponent} from "./message-validate/message-validate.component";
import {HeaderComponent} from "./header/header.component";
import {MaterialModule} from "../material/material-module";

const COMPONENTS = [
  MessageValidateComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ],
})
export class SharedModule { }
