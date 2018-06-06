//Angular imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
//Custom Imports
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule
  ]
})
export class AppModule {
}
