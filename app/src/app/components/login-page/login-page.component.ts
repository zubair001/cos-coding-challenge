import { Component, OnInit } from "@angular/core";
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
    name: "",
    email: "",
    type: "",
    token: "",
    refreshToken: "",
    authenticated: false,
  };
  password = "";
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  login() {
    this.user = this.loginService.authenticate(this.user.email, this.password);
    console.log(this.user);
  }
}
