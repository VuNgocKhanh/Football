import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Config } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingPage } from '../pages/loading/loading';
import { AppModuleProvider } from '../providers/app-module/app-module';
import { FadeInTransiton } from '../transitions/fade-in.transition';
import { FadeOutTransition } from '../transitions/fade-out.transition';

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
export class AppModule {
  constructor(public config: Config) {
    this.config.setTransition('fade-in', FadeInTransiton);
    this.config.setTransition('fade-out', FadeOutTransition);
  }
}
