import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchedulesPage } from '../pages/schedules/schedules';
import { MapsPage } from '../pages/maps/maps';
import { AuditReportsPage } from '../pages/audit-reports/audit-reports';
import { NavigationBarPage } from '../pages/navigation-bar/navigation-bar';
import { FooterPage } from '../pages/footer/footer';
import { NavigationBarDesktopPage } from '../pages/navigation-bar-desktop/navigation-bar-desktop';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulesPage,
    MapsPage,
    AuditReportsPage,
    NavigationBarPage, 
    FooterPage,
    NavigationBarDesktopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulesPage, 
    MapsPage,
    AuditReportsPage,
    NavigationBarPage, 
    FooterPage,
    NavigationBarDesktopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
