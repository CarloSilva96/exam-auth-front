import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const ROUTES: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-in/register', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
