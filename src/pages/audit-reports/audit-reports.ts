import { Component, OnInit } from '@angular/core';
import auditReports from "../../data/audit-reports";

@Component({
  selector: 'page-audit-reports',
  templateUrl: 'audit-reports.html',
})
export class AuditReportsPage implements OnInit {

  auditReportCollection: {
    id: number;
    title: string;
    location: string;
    wasteTypeIds: number[];
  }[];

  ngOnInit() {
    this.auditReportCollection = auditReports;
  }

}
