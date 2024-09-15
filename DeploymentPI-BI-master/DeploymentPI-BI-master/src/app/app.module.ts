import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManagerComponent } from './components/manager/manager.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FournisseurDashboardComponent } from './fournisseur-dashboard/fournisseur-dashboard.component';
import { ArticleDashboardComponent } from './components/article-dashboard/article-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ManagerComponent,
    OverviewComponent,
    ClientDashboardComponent,
    FournisseurDashboardComponent,
    ArticleDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
