import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../core/model/user";
import {UserService} from "../../core/service/user/user.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialog} from "../../core/model/confirm-dialog";
import {ConfirmDialogComponent} from "../../core/components/confim-dialog/confirm-dialog.component";
import {debounceTime, delay, tap} from "rxjs";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userRegisterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initializeUserRegisterForm();
  }

  private initializeUserRegisterForm() {
    this.userRegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  registerUser() {
    const USER = this.userRegisterForm.value as User
    console.log(USER);
    this.userService.registerUser(USER).subscribe({
        next: (value) => {
          this.registerUserSuccess();
        },
      error: err => {
          console.error(err);
      }
      }
    )
  }

  registerUserSuccess(): void {
    const DIALOG_DATA: ConfirmDialog = {
      cancelMsg: "",
      confirmMsg: "OK",
      content: `User created successfully`
    }

    let DIALOG = this.matDialog.open(ConfirmDialogComponent, {
      position: {
        top: '50px'
      },
      data: DIALOG_DATA,
      width: '400px'
    });

    DIALOG.afterOpened().pipe(
      delay(4000)
    ).subscribe(()=> {
      this.router.navigate(['']);
      DIALOG.close();
    });
  }
}
