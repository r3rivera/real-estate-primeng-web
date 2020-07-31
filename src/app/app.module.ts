import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule, PrimeNgModule, AppCommonModule } from './_modules';
import { HeroComponent } from './_components/landing/hero/hero.component';
import { LandingComponent } from './_components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    MaterialModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
