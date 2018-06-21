//Angular imports
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
//Custom Imports
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'passengers',  pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    PassengerDashboardModule
  ]
})
export class AppModule {
}
