import {Injectable} from '@angular/core';
import {JwtTokenService} from "../authentication/jwt-token.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../../model/user";
import jwt_decode from "jwt-decode";
import {HttpClient} from "@angular/common/http";
import {Task} from "../../model/task";

const API_TEST_AUTH_TASKS = "http://localhost:8080/exam-auth/v1/tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private httpClient: HttpClient) {
  }

  getTasks() {
    return this.httpClient.get<Task[]>(API_TEST_AUTH_TASKS);
  }
}
