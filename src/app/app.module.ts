import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DragonModule } from './dragons/dragon.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: AuthComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
     ]),
    DragonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
