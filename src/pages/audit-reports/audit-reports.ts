import { Component, OnInit, ViewChild } from '@angular/core';
import auditReports from '../../data/audit-reports';
import { AuditReportPage } from '../audit-report/audit-report';
import { NavController, NavParams, Nav } from 'ionic-angular';


@Component({
  selector: 'page-audit-reports',
  templateUrl: 'audit-reports.html',
})
export class AuditReportsPage implements OnInit {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  auditReportCollection: {
    id: number;
    title: string;
    location: string;
    bagIds: number[];
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams){
   // this.rootPage = AuditReportPage;

  }

  ngOnInit() {
    this.auditReportCollection = auditReports;
  }

  setContent(item) {
    this.nav.setRoot(AuditReportPage,{myData:item})
  }
}
