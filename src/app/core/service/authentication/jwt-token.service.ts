import { Injectable } from '@angular/core';

const JWT_TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { }

  existToken() {
    return !!this.getToken();
  }

  setToken(jwtToken: string) {
    jwtToken = `Bearer ${jwtToken}`;
    window.localStorage.setItem(JWT_TOKEN, jwtToken);
  }

  getToken() {
    return window.localStorage.getItem(JWT_TOKEN);
  }

  deleteToken() {
    window.localStorage.removeItem(JWT_TOKEN);
  }
}
