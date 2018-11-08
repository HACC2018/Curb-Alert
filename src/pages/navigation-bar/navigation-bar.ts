import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { schedules } from '../schedules/schedules';
import { MapsPage } from '../maps/maps';
import { AuditReportsPage } from '../audit-reports/audit-reports';

/**
 * Generated class for the NavigationBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-bar',
  templateUrl: 'navigation-bar.html',
})
export class NavigationBarPage {
  @ViewChild(Nav) nav:Nav;
  homePage = HomePage;
  navigationPage = NavigationBarPage;
  schedules = schedules;
  mapsPage = MapsPage;
  auditFormsPage = AuditReportsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationBarPage');
  }

  goToHome(Page) {
    this.nav.setRoot(HomePage);
  }

  gotToSchedules(){
    this.nav.setRoot(schedules);
  }

  goToForms() {
    this.nav.setRoot(AuditReportsPage);
  }

  goToMaps() {
    this.nav.setRoot(MapsPage);
  }
}
