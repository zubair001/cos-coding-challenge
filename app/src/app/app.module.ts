import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuctionComponent } from "./components/auction/auction.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { JwtInterceptor } from "./lib/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    NavbarComponent,
    LoginPageComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
