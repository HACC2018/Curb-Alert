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
import { AuditReportPage } from '../pages/audit-report/audit-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulesPage,
    MapsPage,
    AuditReportsPage,
    AuditReportPage
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
    AuditReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
