import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ NavComponent, FooterComponent, AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  exports: [CommonModule, BrowserModule, RouterModule, NavComponent, FooterComponent]
})
export class CoreModule { }
