import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from "../../model/token";
import {UserService} from "../user/user.service";
import {User} from "../../model/user";

const API_TEST_AUTH = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private userService: UserService,
    private httpClient: HttpClient) {
  }


  authenticateUser(user: User) {
    return this.httpClient
      .post<Token>(`${API_TEST_AUTH}/login`, user);
  }

  getTasks() {
    return this.httpClient.get("http://localhost:8080/exam-auth/v1/tasks");
  }
}
