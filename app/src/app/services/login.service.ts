import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiResponse } from "../interfaces/api-response";
import { User } from "../interfaces/user";
import { endPoints } from "../lib/endPoints";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    const localStorageUser = localStorage.getItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<User>(
      localStorageUser !== null ? JSON.parse(localStorageUser) : {}
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  private url = endPoints.AUTHENTICATION;

  authenticate(userId: string, password: string): Observable<User> {
    this.url = this.url + encodeURI(userId);
    const body = {
      password: password,
      meta: "",
    };
    return this.httpClient.put<any>(this.url, body, {
      observe: "body",
      responseType: "json",
    });
  }

  public authenticateUser(
    userId: string,
    password: string
  ): Promise<ApiResponse> {
    let response: ApiResponse = {
      isError: false,
    };

    return new Promise((resolve) => {
      this.authenticate(userId, password).subscribe(
        (user) => {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          response.data = user;
          resolve(response);
        },
        (error) => {
          console.log("inside error");
          response.isError = true;
          response.errorMsg = error;
          resolve(response);
        }
      );
    });
  }

  public logout() {
    const emptyUser: User = {
      internalUserId: "",
      userId: "",
      type: "",
      token: "",
      internalUserUUID: "",
      authenticated: false,
    };
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(emptyUser);
  }
}
