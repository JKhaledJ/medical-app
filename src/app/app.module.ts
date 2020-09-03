import { appRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './Medical/topbar/topbar.component';
import { FooterComponent } from './Medical/footer/footer.component';
import { HeaderComponent } from './Medical/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
