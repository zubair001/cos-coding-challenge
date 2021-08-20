import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from "../app/components/login-page/login-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { AuctionComponent } from './components/auction/auction.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, OverviewComponent, AuctionComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
