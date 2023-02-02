import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtTokenService} from "./jwt-token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{
  constructor(private jwtTokenService: JwtTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtTokenService.existToken()) {
      const JWT_TOKEN = this.jwtTokenService.getToken();
      req = req.clone({
        setHeaders: {
          "Authorization": JWT_TOKEN ? JWT_TOKEN : ''
        }
      });
    }
    return next.handle(req);
  }

}
