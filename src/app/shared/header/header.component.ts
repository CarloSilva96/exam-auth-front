import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../core/service/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../core/model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titleHeader = 'Authentication Exam';

  userLogged$: Observable<boolean>;

  user$: Observable<User>;

  logged!: boolean;

  constructor(
    private router: Router,
    private userService: UserService) {
    userService.decodeTokenAndNotify();
    userService.notifyUserLogged();
    this.user$ = userService.getUserObservable();
    this.userLogged$ = userService.getUserLoggedObservable();
    this.userLogged$.subscribe(value => {
      this.logged = value;
    })
  }

  ngOnInit(): void {
  }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['']).then();
  }
}
