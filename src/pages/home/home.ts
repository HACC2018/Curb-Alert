import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { schedules } from '../schedules/schedules';
import { MapsPage } from '../maps/maps';
import { AuditReportsPage } from '../audit-reports/audit-reports';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedulePage = schedules;
  mapsPage = MapsPage;
  auditReportPage = AuditReportsPage;
}
