import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AskPage } from '../pages/ask/ask';
import { AnswerPage } from '../pages/answer/answer';
import { HistoryPage } from '../pages/history/history';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from '../services/data-service';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    AskPage,
    AnswerPage,
    HistoryPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,	
    WelcomePage,
    LoginPage,
    SignupPage,
    AskPage,
    AnswerPage,
    HistoryPage,
    HomePage,
    TabsPage
  ],
  providers: [
    DataService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
