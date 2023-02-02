import {Injectable} from '@angular/core';
import {JwtTokenService} from "../authentication/jwt-token.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../model/user";
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";

const API_TEST_AUTH_USERS = "http://localhost:8080/exam-auth/v1/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = {} as User;
  private userSubject = new BehaviorSubject<any>(null);
  private userLoggedSubject = new BehaviorSubject<any>(null);

  constructor(private jwtTokenService: JwtTokenService,
              private httpClient: HttpClient) {
    this.decodeTokenAndNotify();
  }

  registerUser(user: User): Observable<string>{
    return this.httpClient.post<string>(API_TEST_AUTH_USERS, user);
  }

  setJwtToken(jwtToken: string) {
    this.jwtTokenService.setToken(jwtToken);
  }

  getUserObservable() {
    return this.userSubject.asObservable();
  }

  getUserLoggedObservable() {
    return this.userLoggedSubject.asObservable();
  }

  logoutUser() {
    this.jwtTokenService.deleteToken();
    this.userSubject.next(this.user);
    this.userLoggedSubject.next(false);
  }

  public decodeTokenAndNotify() {
    if (this.jwtTokenService.existToken()) {
      const USER = this.getUser();
      this.userSubject.next(USER);
    }
  }

  public notifyUserLogged() {
    if (this.jwtTokenService.existToken()) {
      this.userLoggedSubject.next(true);
    }

  }

  public getNameUser() {
    return this.getUser().name;
  }

  userIsLogged() {
    return this.jwtTokenService.existToken();
  }

  getUser() {
    let jwtToken = this.jwtTokenService.getToken();
    jwtToken = jwtToken ? jwtToken : '';
    return jwt_decode<User>(jwtToken);
  }
}
