import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { LOGGED_IN_USER } from "../mock/mock-user";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  authenticate(email: string, password: string): User {

    return LOGGED_IN_USER;
  }
}
