import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/service/authentication/auth.guard";
import {HomeComponent} from "./application/home/home.component";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {LoginGuard} from "./core/service/authentication/login.guard";

const ROUTES: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./login-register/login-register.module')
      .then((module) => module.LoginRegisterModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: []
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
