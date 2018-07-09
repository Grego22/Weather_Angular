import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CountryComponent } from './country/country.component';
import { WeatherComponent } from './weather/weather.component';
import { FooterComponent } from './footer/footer.component';
import {InfoService} from './Services/info.service';
import {WireService} from './Services/wire.service'
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {HttpModule} from '@angular/http';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


//setting up routes


  const route = [
    {path: "home", component: HomeComponent}, 
    { path: '**', component: PageNotFoundComponent },
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CountryComponent,
    WeatherComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot(route)
  ],
  providers: [InfoService, WireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
