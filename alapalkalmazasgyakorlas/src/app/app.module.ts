import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { IconComponent } from './common/icon/icon.component';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';
import { HeroDetailComponent } from './common/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FootballService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
