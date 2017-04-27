import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './+chat-box/chat-box.component';

import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MainComponent } from './+main/main.component';
import { SigninComponent } from './+signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
