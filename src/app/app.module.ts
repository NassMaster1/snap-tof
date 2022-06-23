import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { TofSnapComponent } from './tof-snap/tof-snap.component';
import { TofSnapListComponent } from './tof-snap-list/tof-snap-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LeandingPageComponent } from './leanding-page/leanding-page.component';
import { SingleTofComponent } from './single-tof/single-tof.component';

@NgModule({
  declarations: [
    AppComponent,
    TofSnapComponent,
    TofSnapListComponent,
    HeaderComponent,
    LeandingPageComponent,
    SingleTofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
