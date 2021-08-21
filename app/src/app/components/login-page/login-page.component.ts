import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiResponse } from "src/app/interfaces/api-response";
import { LoginService } from "src/app/services/login.service";
import { User } from "../../interfaces/user";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  user: User = {
    internalUserId: "",
    userId: "",
    type: "",
    token: "",
    internalUserUUID: "",
    authenticated: false,
  };
  password = "";
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    const response: ApiResponse = this.loginService.authenticateUser(
      this.user.userId,
      this.password
    );
    if (!response.isError) {
      console.log("no error I will route to new page");
      this.router.navigate(["overview"]);
    } else {
      console.log("Error " + response.errorMsg);
    }
  }
}
