import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { AuthGuard } from "./lib/auth.guard";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "overview", component: OverviewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
