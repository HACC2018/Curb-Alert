import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { schedules } from '../schedules/schedules';
import { MapsPage } from '../maps/maps';
import { AuditReportsPage } from '../audit-reports/audit-reports';

/**
 * Generated class for the NavigationBarDesktopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-bar-desktop',
  templateUrl: 'navigation-bar-desktop.html',
})
export class NavigationBarDesktopPage {
  homePage = HomePage;
  schedules = schedules;
  mapsPage = MapsPage;
  auditFormsPage = AuditReportsPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationBarDesktopPage');
  }

}
