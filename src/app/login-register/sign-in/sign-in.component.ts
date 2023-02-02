import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../core/service/authentication/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../core/service/user/user.service";
import {User} from "../../core/model/user";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('loginInput') inputLoginDom!: ElementRef<HTMLInputElement>;
  userLoginForm!: FormGroup;
  loginOrPasswordInvalid = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initializeUserLoginForm();
  }

  loginUser() {
    const USER = this.userLoginForm.value as User;

    this.authenticationService.authenticateUser(USER)
      .subscribe(
        (value) => {
          const JWT_TOKEN = value.token;
          this.userService.setJwtToken(JWT_TOKEN);
          this.userService.decodeTokenAndNotify();
          this.userService.notifyUserLogged();
          SignInComponent.alertSuccessLogin(this.userService.getNameUser());
          this.router.navigate(['home']).then();
        },
        () => {
          this.userLoginForm.reset();
          this.inputLoginDom.nativeElement.focus();
          this.loginOrPasswordInvalid = true;
        }
      )
  }

  private initializeUserLoginForm() {
    this.userLoginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  private static alertSuccessLogin(name: string) {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `Successfully logged in. Welcome ${name}`,
      showConfirmButton: false,
      heightAuto: false,
      width: 450,
      timer: 2000
    });
  }

  updateStatusLoginOrPasswordInvalid() {
    this.loginOrPasswordInvalid = false;
  }
}
