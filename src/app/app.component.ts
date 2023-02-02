import {Component} from '@angular/core';
import {Idle} from "@ng-idle/core";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "./core/service/user/user.service";
import {ConfirmDialog} from "./core/model/confirm-dialog";
import {ConfirmDialogComponent} from "./core/components/confim-dialog/confirm-dialog.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam-auth-front';

  TIME_EXPIRATION = 55;
  COUNT_TIME = true;
  userLogged$: Observable<boolean>;

  constructor(private _idle: Idle,
              private router: Router,
              private matDialog: MatDialog,
              private userService: UserService) {
    this.userLogged$ = userService.getUserLoggedObservable();
    this.userLogged$.subscribe(value => {
      if (value && this.COUNT_TIME) {
        this.COUNT_TIME = false;
        _idle.setIdle(this.TIME_EXPIRATION);
        _idle.setTimeout(5);
        _idle.onTimeout.subscribe(() => {
          if (this.userService.userIsLogged()) {
            this.userService.logoutUser();
            this.expiredSession();
          }
        });
        _idle.watch();
      }
    })
  }


  expiredSession(): void {
    const DIALOG_DATA: ConfirmDialog = {
      cancelMsg: "",
      confirmMsg: "OK",
      content: `Your session has expired, please login again`
    }

    let DIALOG = this.matDialog.open(ConfirmDialogComponent, {
      position: {
        top: '50px'
      },
      data: DIALOG_DATA,
      width: '400px'
    });

    DIALOG.beforeClosed().subscribe((dialogOption) => {
      if (dialogOption) {
        this._idle.ngOnDestroy();
        this.router.navigate(['']).then();
      }
    });
  }
}
