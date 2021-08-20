import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { endPoints } from "../lib/endPoints";
import { LOGGED_IN_USER } from "../mock/mock-user";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  private url = endPoints.AUTHENTICATION;

  authenticate(email: string, password: string): User {
    this.url = this.url + encodeURI(email);
    const body = {
      password: password,
      meta: "",
    };
    this.httpClient
      .put<any>(this.url, body, { observe: "body", responseType: "json" })
      .subscribe((data) => {
        console.log(data);
      });
    return LOGGED_IN_USER;
  }
}
