import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./service/authentication/request.interceptor";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";
import {ConfirmDialogComponent} from "./components/confim-dialog/confirm-dialog.component";
import {MaterialModule} from "../material/material-module";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";


const COMPONENTS = [
  ConfirmDialogComponent,
  PageNotFoundComponent
];
const MODULES = [
  RouterModule,
  MaterialModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule,
    MODULES,
    NgIdleKeepaliveModule.forRoot()],
  exports: [MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule já foi carregado. Já foi importado em AppModule');
    }
  }
}
