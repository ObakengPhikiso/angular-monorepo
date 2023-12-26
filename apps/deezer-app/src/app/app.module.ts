import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedUiComponentsModule } from '@angular-monorepo/shared/ui-components';
import {LoaderInterceptor} from '@angular-monorepo/shared/interceptors'
import { NavbarComponent } from './layouts/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiComponentsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
