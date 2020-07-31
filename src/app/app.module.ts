import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './_components/landing/hero/hero.component';
import { LandingComponent } from './_components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent, LoginComponent, SignupComponent } from './_components/common';
import { PrimeNgModule, MaterialModule } from './_modules';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
