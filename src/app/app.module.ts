import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingPage } from '../pages/loading/loading';
import { AppModuleProvider } from '../providers/app-module/app-module';

@NgModule({
  declarations: [
    MyApp
    // AboutPage,
    // ContactPage,
    // HomePage,
    // TabsPage,
    // UsersPage,
    // LoginPage,
    // LoadingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // AboutPage,
    // ContactPage,
    // HomePage,
    // TabsPage,
    // UsersPage,
    // LoginPage,
    // LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppModuleProvider
  ]
})
export class AppModule {}
