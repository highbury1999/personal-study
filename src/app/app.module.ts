import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {ItemService} from './services/item/item.service';
import {BannerService} from './services/banner/banner.service';
import { HeaderComponent } from './component/community/header/header.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent
  ],
  providers: [  ItemService, BannerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
