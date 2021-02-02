import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { UrlService } from './url.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeadComponent, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
