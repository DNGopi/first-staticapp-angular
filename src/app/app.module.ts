import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmsapicallComponent } from './emsapicall/emsapicall.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { EmsproductComponent } from './emsproduct/emsproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    EmsapicallComponent,
    EmsproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
