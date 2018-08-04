import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacMyfacilityComponent } from './facility/fac-myfacility/fac-myfacility.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { AppRouterModule,RoutingComponents } from './app-router/app-router.module'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FacMyfacilityComponent,
    FooterComponent,
    HeaderComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    AppRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
