import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulesPage } from '../schedules/schedules';
import { MapsPage } from '../maps/maps';
import { AuditReportsPage } from '../audit-reports/audit-reports';
import { NavigationBarDesktopPage } from '../navigation-bar-desktop/navigation-bar-desktop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedulePage = SchedulesPage;
  mapsPage = MapsPage;
  auditReportPage = AuditReportsPage;
  navigationPage = NavigationBarDesktopPage;
}
