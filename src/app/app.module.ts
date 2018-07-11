import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { IframeComponent } from './iframe/iframe.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    ThumbnailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
