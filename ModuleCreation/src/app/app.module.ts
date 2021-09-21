import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'
import { CamerasComponent } from './camera/component/camera.component';
import { ACSComponent } from './acs/component/acs.component';
import { MobilesComponent } from './mobiles/Compoents/mobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    CamerasComponent,
    ACSComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
