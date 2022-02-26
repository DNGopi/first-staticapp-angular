import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmsapicallComponent } from './emsapicall/emsapicall.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { EmsproductComponent } from './emsproduct/emsproduct.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './myfliter.pipe';
import { SAVER, getSaver } from './saver.provider'
import { FiledownloadComponent } from './filedownload/filedownload.component';




@NgModule({
  declarations: [
    AppComponent,
    EmsapicallComponent,
    EmsproductComponent,
    FilterPipe,
    FiledownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [{provide: SAVER, useFactory: getSaver}],
  bootstrap: [AppComponent]
})
export class AppModule { }
