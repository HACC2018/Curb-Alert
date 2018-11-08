import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { schedules } from '../pages/schedules/schedules';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScheduleitemsPage } from '../pages/scheduleitems/scheduleitems';
import { MapsPage } from '../pages/maps/maps';
import { AuditReportsPage } from '../pages/audit-reports/audit-reports';
import { NavigationBarPage } from '../pages/navigation-bar/navigation-bar';
import { FooterPage } from '../pages/footer/footer';
import { NavigationBarDesktopPage } from '../pages/navigation-bar-desktop/navigation-bar-desktop';

import { AuditReportPage } from '../pages/audit-report/audit-report';
import { GreenbinPage } from '../pages/greenbin/greenbin';
import { BlackbinPage } from '../pages/blackbin/blackbin';
import { BluebinPage } from '../pages/bluebin/bluebin';
import { BulkyitemsPage } from '../pages/bulkyitems/bulkyitems';
import { RecyclemapPage } from '../pages/recyclemap/recyclemap';
import { DonationmapPage } from '../pages/donationmap/donationmap';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    schedules,
    ScheduleitemsPage,
    MapsPage,
    AuditReportsPage,

    AuditReportPage,
    GreenbinPage,
    BlackbinPage,
    BluebinPage,
    BulkyitemsPage,
    RecyclemapPage,
    DonationmapPage,


    NavigationBarPage, 
    FooterPage,
    NavigationBarDesktopPage,
    AuditReportPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    schedules,
    ScheduleitemsPage,
    MapsPage,
    AuditReportsPage,

    AuditReportPage,
    GreenbinPage,
    BlackbinPage,
    BluebinPage,
    BulkyitemsPage,
    RecyclemapPage,
    DonationmapPage,

    NavigationBarPage, 
    FooterPage,
    NavigationBarDesktopPage,
    AuditReportPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
